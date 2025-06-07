import type { AssetWithBalance, BasePosition, LiquidityAssetInfo, SummaryData, YieldSummaryData } from "./common";

export enum CurveType {
  ConstantProduct = 0,
  ConstantPrice = 1,
  Stable = 2,
  ConstantProductWithOffset = 3,
  ConcentratedLiquidity = 4,
}

export type AmmPosition = Omit<BasePosition, "title"> & {
  asset: LiquidityAssetInfo;
  curveType: CurveType;
  apr: number | null;
  balance: number;
  balanceString: string;
};

export type ClmmPosition = BasePosition & {
  poolInfoPda: string;
  positionMintAddress: string;
  underlyings: AssetWithBalance[];
  curveType: CurveType;
  apr: number | null;
  isInRange: boolean;
  upperLimit: number | null;
  lowerLimit: number | null;
  currentPrice: number | null;
  rewardAssets: AssetWithBalance[];
  pendingRewardInUSD: number | null;
};

export type LiquidityResult = { amm: AmmPosition[]; clmm: ClmmPosition[] };

export type LiquiditySummary = {
  amm: YieldSummaryData;
  clmm: SummaryData;
};
