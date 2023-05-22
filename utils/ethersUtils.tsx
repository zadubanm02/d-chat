import { MoralisDataObjectValue } from "@moralisweb3/common-core";
import { stripWalletHash } from "./stringUtils";

export const checkAddresses = (myAddress: string, address: string) => {
  if (myAddress === address) {
    return "ME";
  }
  return stripWalletHash(address);
};

export const getImage = (data: MoralisDataObjectValue | undefined) => {
  const jsonData = JSON.parse(JSON.stringify(data as unknown as string));
  return jsonData.image;
};
