import type { AssetInfo, BasePosition, YieldSummaryData } from "./common";

export type MarginUserAccount = BasePosition & {
  perpetuals: MarginPerpetual[];
  orders: MarginOrder[];
  balances: MarginBalance[];
};

export type MarginPerpetual = Omit<BasePosition, "platform"> & {
  logoURI?: string;
  isLong: boolean;
  size: number;
  sizeString: string;
  notionalValue: number | null;
  avgEntryPrice: number | null;
};

export type MarginOrder = Omit<BasePosition, "platform" | "valueInUSD"> & {
  isBid: boolean;
  size: number;
  sizeString: string;
  offerPrice: number | null;
  logoURI?: string;
};

export type MarginBalance = Omit<BasePosition, "title" | "platform"> & {
  asset: AssetInfo;
  balance: number;
  balanceString: string;
  apr: number | null;
};

export type MarginResult = MarginUserAccount[];

export type MarginSummary = YieldSummaryData;
