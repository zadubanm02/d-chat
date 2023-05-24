"use client";
import React, { useEffect, useState } from "react";
import Moralis from "moralis";
import {
  EvmAddressInput,
  EvmChain,
  EvmNft,
  GetWalletNFTsResponseAdapter,
} from "@moralisweb3/common-evm-utils";
import { useAtomValue } from "jotai";
import { activeChatAtom } from "../state/common.state";
import { useActiveChain } from "@thirdweb-dev/react-core";
import {
  PairingResult,
  getMutualCollections,
  pairCollections,
} from "./helpers/collectionPairing";
import { useMyWallet } from "./useWallet";

const MONGS_COLLECTION_ADDRESS = "0xb4a7d131436ed8ec06ad696fa3bf8d23c0ab3acf";
const PIXEL_LADY_ADDRESS = "0x8fc0d90f2c45a5e7f94904075c952e0943cfccfd";

const fakeData: [] = [
  {
    amount: "1",
    block_number: "17313153",
    block_number_minted: "13967972",
    contract_type: "ERC721",
    last_metadata_sync: "2022-12-01T08:40:11.179Z",
    last_token_uri_sync: "2022-12-01T08:40:04.799Z",
    metadata:
      '{"description":"MONGS are a culture, a vibe. They believe that somehow this is new, and hip, and an attack on the powers of society.","external_url":"https://mongs.io","image":"https://meta.mongs.io/image/mongs/1003887.png","name":"MONG #3887","attributes":[{"trait_type":"Background","value":"Dark Blue"},{"trait_type":"Fur Expression","value":"Black Shocked"},{"trait_type":"Eyes","value":"Pink Retro"},{"trait_type":"Clothing","value":"Ammo Rounds"},{"trait_type":"Head","value":"Red Mullet"},{"trait_type":"Accessory","value":"None"},{"trait_type":"Mouth","value":"None"}]}',
    minter_address: "0xd467a1a95dd4a8eb741dc0bc33bf92c8fb2da8cf",
    name: "MONGS",
    owner_of: "0xe03d7cb5e146e7f67c5da6bd81d7252b2d6eea09",
    possible_spam: false,
    symbol: "MONG",
    tokenAddress: "0xb4a7d131436ed8ec06ad696fa3bf8d23c0ab3acf",
    token_hash: "2257dfb678d6740a560aba0182fcb7dd",
    token_id: "1003887",
    token_uri: "https://meta",
  },
  {
    amount: 1,
    blockNumber: "17309487",
    block_number_minted: "16017229",
    contract_type: "ERC721",
    last_metadata_sync: "2023-05-22T13:43:52.210Z",
    last_token_uri_sync: "2023-01-17T01:56:11.009Z",
    minter_address: "0xf87b432390d9cbc8adc317bf5282f44dd43b8b13",
    name: "Pixelady Maker",
    owner_of: "0xe03d7cb5e146e7f67c5da6bd81d7252b2d6eea09",
    possible_spam: false,
    symbol: "PXLDY",
    tokenAddress: "0x8fc0d90f2c45a5e7f94904075c952e0943cfccfd",
    token_hash: "4055c72f556b7b18dfe223916181ee01",
    token_id: "6742",
    token_uri: "https://ipfs.mo",
  },
];

const useNFTData = () => {
  const chain = EvmChain.ETHEREUM;
  const activeChain = useActiveChain();
  const { walletAddress } = useMyWallet();
  const selectedAddress = useAtomValue(activeChatAtom);
  const [data, setData] = useState<GetWalletNFTsResponseAdapter | null>(null);
  const [mutualData, setMutualData] = useState<PairingResult[] | null>(null);

  const getData = async () => {
    if (selectedAddress === "something") {
      return;
    }
    console.log("Getting Data");
    console.log("Active chain", activeChain);
    try {
      if (activeChain?.slug === "ethereum") {
        const response = await Moralis.EvmApi.nft.getWalletNFTs({
          address: selectedAddress as EvmAddressInput,
          chain,
          limit: 20,
        });
        console.log("RESPONSE", response);
        setData(response);
        getMutualData(response.result);
      }
      console.log("No eth chain selected");
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  const getMutualData = async (result: EvmNft[]) => {
    try {
      const paired = pairCollections(fakeData, result ?? []);
      const info = await getMutualCollections(paired);
      console.log("PAIRING RESUTL", info);
    } catch (error) {
      console.log("ERROR PAIRING", error);
    }
  };

  useEffect(() => {
    getData();
  }, [selectedAddress, activeChain]);

  return { data };
};

export default useNFTData;
