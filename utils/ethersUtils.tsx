import { stripWalletHash } from "./stringUtils";

export const checkAddresses = (myAddress: string, address: string) => {
  if (myAddress === address) {
    return "ME";
  }
  return stripWalletHash(address);
};
