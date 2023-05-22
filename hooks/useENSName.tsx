import React, { useEffect, useState } from "react";
import Moralis from "moralis";
import {
  EvmAddressInput,
  EvmChain,
  GetWalletNFTsResponseAdapter,
  ResolveAddressResponseAdapter,
} from "@moralisweb3/common-evm-utils";
import { useAtomValue } from "jotai";
import { activeChatAtom } from "../state/common.state";
import { useActiveChain } from "@thirdweb-dev/react-core";
import { SpaceIDResponse, getSpaceIdENS } from "../adapters/spaceId";

const useENSName = () => {
  const chain = EvmChain.ETHEREUM;
  const activeChain = useActiveChain();

  const selectedAddress = useAtomValue(activeChatAtom);
  const [data, setData] = useState<
    ResolveAddressResponseAdapter | SpaceIDResponse | null
  >(null);

  const getETHENS = async () => {
    console.log("Getting Data");
    try {
      const response = await Moralis.EvmApi.resolve.resolveAddress({
        address: selectedAddress as EvmAddressInput,
      });
      console.log("RESPONSE", response);
      setData(response);
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  const getSpaceENS = async () => {
    try {
      const result = await getSpaceIdENS(
        activeChain?.chain.toLowerCase() ?? "",
        selectedAddress ?? ""
      );
      setData(result);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    console.log("Activechain", activeChain);
    if (activeChain === undefined) {
    } else if (activeChain.slug.toLowerCase() === "ethereum") {
      getETHENS();
    } else if (
      activeChain.chain.toLowerCase() == "bsc" ||
      activeChain.chain.toLowerCase() == "arb1"
    ) {
      getSpaceENS();
    } else {
      console.log("No active Chain");
    }
  }, [selectedAddress, activeChain]);

  return { ensName: data };
};

export default useENSName;
