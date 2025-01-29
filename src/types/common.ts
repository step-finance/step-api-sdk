export type AssetInfo = {
  title: string;
  symbol: string;
  mint: string;
  logoURI?: string;
  underlyings?: AssetInfo[];
};

export type LiquidityAssetInfo = {
  title: string;
  symbol: string;
  mint: string;
  logoURI?: string;
  underlyings: AssetWithBalance[];
};

export type AssetWithBalance = AssetInfo & {
  balance: number;
};

export type PlatformInfo = {
  title: string;
};

export type BasePosition = {
  title: string;
  platform: PlatformInfo;
  valueInUSD: number | null;
};

export type ValueSummaryData = { totalValue: number };
export type YieldSummaryData = ValueSummaryData & { estimated24hReward: number };
export type SummaryData = YieldSummaryData & { totalPendingReward: number };
