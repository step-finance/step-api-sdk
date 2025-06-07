import type { AssetInfo, BasePosition, LiquidityAssetInfo, ValueSummaryData, YieldSummaryData } from "./common";

export type TokenPosition = Omit<BasePosition, "title" | "platform"> & {
  asset: AssetInfo;
  balance: number;
  balanceString: string;
  decimals: number;
  programId: string;
  priceInUSD: number | null;
  priceChange24hPct: number | null;
};

export type YieldTokenPosition = Omit<BasePosition, "title" | "platform"> & {
  balance: number;
  balanceString: string;
  decimals: number;
  programId: string;
  priceInUSD: number | null;
  priceChange24hPct: number | null;
  asset: LiquidityAssetInfo;
  apr: number | null;
};

export type TokenResult = { spot: TokenPosition[]; yield: YieldTokenPosition[] };

export type TokenSummary = { spot: ValueSummaryData; yield: YieldSummaryData };
