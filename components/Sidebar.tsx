import React, { useCallback } from "react";
import RecipientLine from "./RecipientLine";

const Sidebar = () => {
  return (
    <div className="w-50 px-5 py-3">
      <h1 className="font-extrabold text-2xl mb-8">D-Chat</h1>
      <p className="font-bold text-xs">ALL MESSAGES</p>
      <RecipientLine walletHash={"0x12n1sajklnsd"} recentMessage="Hello" />
      <RecipientLine
        walletHash={"0x66635850Ee69A9d5A1b9EB4c4C73c05fBE23fC5f"}
        recentMessage="Hello"
      />
    </div>
  );
};

export default Sidebar;
