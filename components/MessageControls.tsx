import React from "react";
import MessageInput from "./MessageInput";
import SendMessageButton from "./SendMessageButton";

const MessageControls = () => {
  return (
    <div className="h-18 w-full flex flex-row pt-3">
      <MessageInput />
      <SendMessageButton />
    </div>
  );
};

export default MessageControls;
