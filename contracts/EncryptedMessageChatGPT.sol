// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";
import "@openzeppelin/contracts/utils/Address.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";

contract EncryptedMessage is IERC721Receiver {
    using Address for address;
    using ECDSA for bytes32;

    IERC721 public nftContract;
    mapping(uint256 => bytes32) private messages;
    mapping(uint256 => bool) private notified;

    event MessageSent(uint256 indexed tokenId, bytes message);
    event MessageReceived(uint256 indexed tokenId, address indexed receiver, bytes32 message);

    /* @dev Initializes the contract by setting the NFT contract address.
     */
    constructor(address _nftContract) {
        nftContract = IERC721(_nftContract);
    }

    /* @dev Handles the receipt of an NFT and returns the function selector.
     */
    function onERC721Received(
        address,
        address,
        uint256,
        bytes calldata
    ) external pure override returns (bytes4) {
        return this.onERC721Received.selector;
    }

    /* @dev Allows users to send an encrypted message to a specific NFT holder.
     */
    function sendMessage(uint256 tokenId, bytes calldata encryptedMessage) external {
        require(encryptedMessage.length > 0, "Message should not be empty");
        require(nftContract.ownerOf(tokenId) != address(0), "Token does not exist");
        messages[tokenId] = keccak256(encryptedMessage);
        notified[tokenId] = false;
        emit MessageSent(tokenId, encryptedMessage);
    }

    /* @dev Allows the NFT holder to receive the message by providing a valid signature.
     */
    function receiveMessage(uint256 tokenId, bytes calldata signature) external {
        require(nftContract.ownerOf(tokenId) == msg.sender, "Caller is not the token owner");
        require(!notified[tokenId], "Message already received");

        bytes32 messageHash = keccak256(abi.encodePacked(tokenId, msg.sender, address(this))).toEthSignedMessageHash();
        address signer = messageHash.recover(signature);

        require(signer != address(0), "Invalid signature");
        
        emit MessageReceived(tokenId, msg.sender, messages[tokenId]);
        notified[tokenId] = true;
    }
}