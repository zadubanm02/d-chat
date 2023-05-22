import React, { useEffect, useState } from "react";
import Moralis from "moralis";
import {
  EvmAddressInput,
  EvmChain,
  GetWalletNFTsResponseAdapter,
} from "@moralisweb3/common-evm-utils";
import { useAtomValue } from "jotai";
import { activeChatAtom } from "../state/common.state";
import { useActiveChain } from "@thirdweb-dev/react-core";

const useNFTData = () => {
  const chain = EvmChain.ETHEREUM;
  const activeChain = useActiveChain();
  const selectedAddress = useAtomValue(activeChatAtom);
  const [data, setData] = useState<GetWalletNFTsResponseAdapter | null>(null);

  const getData = async () => {
    if (selectedAddress === "something") {
      return;
    }
    console.log("Getting Data");
    console.log("Active chain", activeChain);
    try {
      if (activeChain?.slug === "ethereum") {
        const response = await Moralis.EvmApi.nft.getWalletNFTs({
          address: selectedAddress as EvmAddressInput,
          chain,
          limit: 4,
        });
        console.log("RESPONSE", response);
        setData(response);
      }
      console.log("No eth chain selected");
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  useEffect(() => {
    getData();
  }, [selectedAddress, activeChain]);

  return { data };
};

export default useNFTData;
