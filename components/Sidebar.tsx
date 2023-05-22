import React, { useCallback } from "react";
import RecipientLine from "./RecipientLine";
import NewMeesageDialog from "./NewMessageDialog";

const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between w-50 px-5 pt-3 h-full col-span-3">
      <div>
        <h1 className="font-extrabold text-2xl mb-8">OG Connect</h1>
        <p className="font-bold text-xs">ALL MESSAGES</p>
        <RecipientLine walletHash={"0x12n1sajklnsd"} recentMessage="Hello" />
        <RecipientLine
          walletHash={"0x66635850Ee69A9d5A1b9EB4c4C73c05fBE23fC5f"}
          recentMessage="Hello"
        />
        <RecipientLine
          walletHash={"0xE03D7Cb5E146e7F67c5da6BD81D7252B2D6Eea09"}
          recentMessage="Whats uuuuup?"
        />
        <RecipientLine
          walletHash="0x2e552E3aD9f7446e9caB378c008315E0C26c0398"
          recentMessage="BSC Address"
        />
      </div>
      <div>
        <NewMeesageDialog />
      </div>
    </div>
  );
};

export default Sidebar;
