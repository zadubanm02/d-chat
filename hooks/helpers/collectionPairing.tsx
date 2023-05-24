import {
  EvmAddress,
  EvmNft,
  EvmNftMetadata,
} from "@moralisweb3/common-evm-utils";
import Moralis from "moralis";

// macth mutual collections and return tokenAdresses of collections
export const pairCollections = (
  myHoldings: EvmNft[],
  targetHodlings: EvmNft[]
): EvmAddress[] => {
  console.log("Target Holdings", ...targetHodlings);
  let matchedCollections: EvmAddress[] = [];
  myHoldings.forEach((holding, index) => {
    console.log("My Holding", holding.tokenAddress);
    const nft = targetHodlings.find(
      (item) => item.tokenAddress.lowercase === holding.tokenAddress.lowercase
    );
    console.log("NFT", nft);
    matchedCollections.push(nft?.tokenAddress as EvmAddress);
  });
  return matchedCollections;
};

export type PairingResult = EvmNftMetadata | undefined;

// Get mutual collections info
export const getMutualCollections = async (pairedCollections: EvmAddress[]) => {
  console.log("PAIRIGN", pairedCollections);
  const successResults: PairingResult[] = [];
  const errors = [];
  const collectionsInfo = pairedCollections.map(async (collection) => {
    const info = await getCollectionInfo(collection);
    return info;
  });
  const results = await Promise.allSettled(collectionsInfo);
  results.map((result) => {
    if (result.status === "fulfilled") {
      successResults.push(result.value);
    } else {
      errors.push(result.reason);
    }
  });

  return successResults;
};

// get collecion info
export const getCollectionInfo = async (tokenAddress: EvmAddress) => {
  const response = await Moralis.EvmApi.nft.getNFTContractMetadata({
    address: tokenAddress,
  });
  return response?.result;
};
