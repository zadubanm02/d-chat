import React, { useCallback } from "react";
import { stripWalletHash } from "../utils/stringUtils";
import { useAtom } from "jotai";
import { activeChatAtom } from "../state/common.state";

type Props = {
  walletHash: string;
  recentMessage?: string;
};

const RecipientLine: React.FC<Props> = ({ walletHash, recentMessage }) => {
  const [activeChat, setActiveChat] = useAtom(activeChatAtom);

  const handleChat = useCallback(() => {
    setActiveChat(walletHash);
  }, [setActiveChat, walletHash]);

  return (
    <div
      onClick={() => handleChat()}
      className="p-2 my-2 border border-solid border-gray-300 rounded-xl cursor-pointer"
    >
      <h3 className="font-bold">{stripWalletHash(walletHash)}</h3>
      <p className="px-2 text-xs">{recentMessage}</p>
    </div>
  );
};

export default RecipientLine;
