import type { AssetWithBalance, BasePosition, LiquidityAssetInfo, SummaryData } from "./common";

export type FarmPosition = BasePosition & {
  farmAddress: string;
  asset: LiquidityAssetInfo;
  apr: number | null;
  balance: number;
  balanceString: string;
  rewardAssets: AssetWithBalance[];
  pendingRewardInUSD: number | null;
};

export type FarmResult = FarmPosition[];

export type FarmSummary = SummaryData;
