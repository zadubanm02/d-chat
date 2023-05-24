import React from "react";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

const SendMessageButton = () => {
  return (
    <button className="p-2 rounded-xl bg-gray-900 mr-1">
      <ArrowTopRightIcon
        color="#fff"
        width={30}
        stroke="#fff"
        strokeWidth="1"
      />
    </button>
  );
};

export default SendMessageButton;
