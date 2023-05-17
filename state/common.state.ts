import { atom } from "jotai";

// state for defining activeChat
export const activeChat = atom<string | null>("something");

export const activeChatAtom = atom(
  (get) => get(activeChat),
  (get, set, chatId: string) => {
    set(activeChat, chatId);
  }
);
