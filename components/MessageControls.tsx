import React from "react";
import MessageInput from "./MessageInput";
import SendMessageButton from "./SendMessageButton";

const MessageControls = () => {
  return (
    <div className=" w-full flex flex-row my-2">
      <MessageInput />
      <SendMessageButton />
    </div>
  );
};

export default MessageControls;
