import type { AssetInfo, AssetWithBalance, BasePosition, SummaryData } from "./common";

export type StakingPosition = Omit<BasePosition, "title"> & {
  asset: AssetInfo;
  apr: number | null;
  balance: number;
  balanceString: string;
  rewardAssets: AssetWithBalance[];
  pendingRewardInUSD: number | null;
};

export type StakingResult = StakingPosition[];

export type StakingSummary = SummaryData;
