import type { AssetWithBalance, BasePosition, SummaryData, YieldSummaryData } from "./common";
import type { CurveType } from "./liquidity";

export type MultiplyResult = {
  clmm: MultiplyClmmPosition[];
  token: MultiplyTokenPosition[];
};

export type BaseMultiplyPosition = BasePosition & {
  poolAddress: string | null; // same as poolInfoPda in the case of clmm positions
  apr: number | null;
  pnl: number | null;
  ltv: number | null; 
  leverage: number | null; 
  valueInUSD: number | null; 
};

export type MultiplyClmmPosition = BaseMultiplyPosition & {
  collateralAssets: AssetWithBalance[];
  borrowAssets: AssetWithBalance[];
  positionMintAddress: string;
  curveType: CurveType;
  isInRange: boolean;
  upperLimit: number | null;
  lowerLimit: number | null;
  liquidationUpperLimit: number | null;
  liquidationLowerLimit: number | null;
  currentPrice: number | null;
  rewardAssets: AssetWithBalance[];
  pendingRewardInUSD: number | null;
};

export type MultiplyTokenPosition = BaseMultiplyPosition & {
  collateralAsset: AssetWithBalance;
  borrowAsset: AssetWithBalance;
  liquidationPrice: number | null;
  poolName: string | null;
};

export type MultiplySummary = {
  clmm: SummaryData;
  token: YieldSummaryData;
};
