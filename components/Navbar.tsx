import { ConnectWallet } from "@thirdweb-dev/react";
import React from "react";

const Navbar = () => {
  return (
    <div className="h-18 px-4 py-2  items-center justify-end flex flex-row">
      <ConnectWallet theme="light" />
    </div>
  );
};

export default Navbar;
