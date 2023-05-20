import React, { useCallback } from "react";
import RecipientLine from "./RecipientLine";
import NewMeesageDialog from "./NewMessageDialog";

const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between w-50 px-5 py-3 h-full">
      <div>
        <h1 className="font-extrabold text-2xl mb-8">OG Connect</h1>
        <p className="font-bold text-xs">ALL MESSAGES</p>
        <RecipientLine walletHash={"0x12n1sajklnsd"} recentMessage="Hello" />
        <RecipientLine
          walletHash={"0x66635850Ee69A9d5A1b9EB4c4C73c05fBE23fC5f"}
          recentMessage="Hello"
        />
      </div>
      <div>
        <NewMeesageDialog />
      </div>
    </div>
  );
};

export default Sidebar;
