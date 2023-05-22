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

const useENSName = () => {
  const chain = EvmChain.ETHEREUM;
  const selectedAddress = useAtomValue(activeChatAtom);
  const [data, setData] = useState<ResolveAddressResponseAdapter | null>(null);

  const getData = async () => {
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

  useEffect(() => {
    getData();
  }, [selectedAddress]);

  return { ensName: data };
};

export default useENSName;
