import React from "react";
import { stripWalletHash } from "../utils/stringUtils";
import { useMyWallet } from "../hooks/useWallet";
import { checkAddresses } from "../utils/ethersUtils";

const MessageBubble = ({
  messageText,
  walletHash,
}: {
  messageText: string;
  walletHash: string;
}) => {
  const { walletAddress } = useMyWallet();
  const getPlace = () => {
    return walletAddress === walletHash ? "place-self-end" : null;
  };
  return (
    <span className={`flex flex-col my-3 ${getPlace()} w-auto max-w-md`}>
      <p className="text-xs px-3 font-extrabold">
        {checkAddresses(walletAddress ?? "", walletHash)}
      </p>
      <div
        className={`flex flex-col justify-self-end p-3 m-2 bg-gray-200 rounded-xl max-w-md font-semibold`}
      >
        {messageText}
      </div>
    </span>
  );
};

export default MessageBubble;
