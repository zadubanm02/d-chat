import { useAtom } from "jotai";
import React, { useCallback } from "react";
import { activeChatAtom } from "../state/common.state";

export const useActiveChat = () => {
  const [activeChat, setActiveChat] = useAtom(activeChatAtom);

  // do something if the active chat changes
  // fetch messages, maybe nft data for modal, maybe the latest nft for avatar
  const handleActiveChatChange = useCallback(() => {}, []);

  return {};
};
