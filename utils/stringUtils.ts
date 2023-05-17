export const stripWalletHash = (walletHash: string) => {
  const first = walletHash.slice(0, 10);
  const last = walletHash.slice(walletHash.length - 6, walletHash.length);
  return `${first}...${last}`;
};
// 0x6663...fC5f
