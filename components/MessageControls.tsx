import React from "react";
import MessageInput from "./MessageInput";
import SendMessageButton from "./SendMessageButton";

const MessageControls = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full flex flex-row m-5">
      <MessageInput />
      <SendMessageButton />
    </div>
  );
};

export default MessageControls;
