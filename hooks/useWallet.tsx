"use client";
import { useWallet } from "@thirdweb-dev/react";
import { useAtom } from "jotai";
import { useCallback, useEffect } from "react";
import { myWalletAtomAtom } from "../state/common.state";

export const useMyWallet = () => {
  const [walletAddress, setWalletAddress] = useAtom(myWalletAtomAtom);
  const wallet = useWallet();

  const extractWallet = useCallback(async () => {
    const hash = await wallet?.getAddress();
    if (hash) {
      setWalletAddress(hash);
    }
  }, [setWalletAddress, wallet]);

  useEffect(() => {
    extractWallet();
  }, [extractWallet, setWalletAddress, wallet]);

  return { walletAddress };
};
