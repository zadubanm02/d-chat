import { atom } from "jotai";

// state for defining activeChat
export const activeChat = atom<string | null>(null);

export const activeChatAtom = atom(
  (get) => get(activeChat),
  (get, set, chatId: string) => {
    set(activeChat, chatId);
  }
);

// state for defining activeChat
export const myWallet = atom<string | null>(null);

export const myWalletAtomAtom = atom(
  (get) => get(myWallet),
  (get, set, walletHash: string) => {
    set(myWallet, walletHash);
  }
);
