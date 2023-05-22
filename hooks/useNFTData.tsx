import React, { useEffect, useState } from "react";
import Moralis from "moralis";
import {
  EvmAddressInput,
  EvmChain,
  GetWalletNFTsResponseAdapter,
} from "@moralisweb3/common-evm-utils";
import { useAtomValue } from "jotai";
import { activeChatAtom } from "../state/common.state";

const useNFTData = () => {
  const chain = EvmChain.ETHEREUM;
  const selectedAddress = useAtomValue(activeChatAtom);
  const [data, setData] = useState<GetWalletNFTsResponseAdapter | null>(null);

  const getData = async () => {
    console.log("Getting Data");
    try {
      const response = await Moralis.EvmApi.nft.getWalletNFTs({
        address: selectedAddress as EvmAddressInput,
        chain,
        limit: 4,
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

  return { data };
};

export default useNFTData;
