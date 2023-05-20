import type { NextPage } from "next";
import MessageBubble from "../components/MessageBubble";
import { useWindowSize } from "../hooks/useWindowSize";

const Home: NextPage = () => {
  return (
    <div
      className={`h-[700px] overflow-y-auto overflow-hidden flex flex-col justify-items-stretch`}
    >
      <MessageBubble
        walletHash={"0x12n1sajklnsd"}
        messageText="Hello how u doin ?"
      />
      <MessageBubble
        walletHash={"0x66635850Ee69A9d5A1b9EB4c4C73c05fBE23fC5f"}
        messageText="Im good what about u?"
      />
      <MessageBubble
        walletHash={"0x12n1sajklnsd"}
        messageText="Hello how u doin ?"
      />
      <MessageBubble
        walletHash={"0x12n1sajklnsd"}
        messageText="Hello how u doin ?"
      />
      <MessageBubble
        walletHash={"0x66635850Ee69A9d5A1b9EB4c4C73c05fBE23fC5f"}
        messageText="Im good what about u?"
      />
      <MessageBubble
        walletHash={"0x12n1sajklnsd"}
        messageText="Hello how u doin ?"
      />
      <MessageBubble
        walletHash={"0x12n1sajklnsd"}
        messageText="Hello how u doin ?"
      />
      <MessageBubble
        walletHash={"0x66635850Ee69A9d5A1b9EB4c4C73c05fBE23fC5f"}
        messageText="Im good what about u?"
      />
      <MessageBubble
        walletHash={"0x12n1sajklnsd"}
        messageText="Hello how u doin ?"
      />
      <MessageBubble
        walletHash={"0x12n1sajklnsd"}
        messageText="Hello how u doin ?"
      />
      <MessageBubble
        walletHash={"0x66635850Ee69A9d5A1b9EB4c4C73c05fBE23fC5f"}
        messageText="Im good what about u?"
      />
      <MessageBubble
        walletHash={"0x12n1sajklnsd"}
        messageText="Hello how u doin ?"
      />
      <MessageBubble
        walletHash={"0x12n1sajklnsd"}
        messageText="Hello how u doin ?"
      />
    </div>
  );
};

export default Home;
