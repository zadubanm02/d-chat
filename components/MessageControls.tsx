import React from "react";
import MessageInput from "./MessageInput";
import SendMessageButton from "./SendMessageButton";

const MessageControls = () => {
  return (
    <div className="absolute bottom-0 right-0 w-full flex flex-row">
      <MessageInput />
      <SendMessageButton />
    </div>
  );
};

export default MessageControls;
