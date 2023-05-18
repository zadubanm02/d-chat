import { ConnectWallet } from "@thirdweb-dev/react";
import { useAtomValue } from "jotai";
import React from "react";
import { activeChatAtom } from "../state/common.state";

const Navbar = () => {
  const activeChat = useAtomValue(activeChatAtom);

  return (
    <div className="h-18 px-4 py-2  items-center justify-between flex flex-row">
      <span className="p-2 mb-3 border border-solid border-gray-300 rounded-xl">
        {activeChat ?? ""}
      </span>
      <ConnectWallet theme="light" />
    </div>
  );
};

export default Navbar;
