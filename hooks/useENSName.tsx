"use client";

import React, { useEffect, useState } from "react";
import { useAtomValue } from "jotai";
import { activeChatAtom } from "../state/common.state";
import { useActiveChain } from "@thirdweb-dev/react-core";
import { providers } from "ethers";
import SID, { getSidAddress } from "@siddomains/sidjs";

const useENSName = () => {
  const activeChain = useActiveChain();

  const selectedAddress = useAtomValue(activeChatAtom);
  const [data, setData] = useState<string | null>(null);

  const getSpaceIdENS = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const provider = new providers.Web3Provider(window.ethereum);
        const sid = new SID({
          provider,
          sidAddress: getSidAddress(activeChain?.chainId),
        });
        const name = await sid.getName(selectedAddress); // 0x123
        console.log("name", name);
        setData(name.name);
      } catch (error) {
        console.log("Error", error);
      }
    }
  };

  useEffect(() => {
    console.log("Activechain", activeChain);
    if (activeChain === undefined) {
    } else if (activeChain.slug.toLowerCase() === "ethereum") {
      // getETHENS();
      getSpaceIdENS();
    } else if (
      activeChain.chain.toLowerCase() == "bsc" ||
      activeChain.chain.toLowerCase() == "arb1"
    ) {
      getSpaceIdENS();
    } else {
      console.log("No active Chain");
    }
  }, [selectedAddress, activeChain]);

  return { ensName: data };
};

export default useENSName;
