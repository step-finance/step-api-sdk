import type { AssetInfo, BasePosition, SummaryData, ValueSummaryData } from "./common";

export type NFTMarketSingleOrder = BasePosition & {
  logoURI?: string;
  isBid: boolean;
  floorPriceInSOL: number | null;
  offerPriceInSOL: number;
};

export type NFTMarketPoolOrder = BasePosition & {
  logoURI?: string;
  nftsHeld: number;
  mmProfitInSOL: number;
  mmProfitInUSD: number;
  balance: number;
  balanceString: string;
  isSharedEscrow: boolean;
  floorPriceInSOL: number | null;
  apy: number | null;
  // if sharedEscrow === true then valueInUSD = 0; show escrow tag in UI
};

export type NFTMarketEscrow = Omit<BasePosition, "title"> & {
  asset: AssetInfo;
  balance: number;
  balanceString: string;
};

export type NFTMarketResult = {
  singleOrder: NFTMarketSingleOrder[];
  poolOrder: NFTMarketPoolOrder[];
  escrowAccount: NFTMarketEscrow[];
};

export type NFTMarketSummary = {
  singleOrder: ValueSummaryData;
  poolOrder: SummaryData;
  escrowAccount: ValueSummaryData;
};
