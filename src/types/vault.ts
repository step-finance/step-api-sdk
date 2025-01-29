import type { AssetWithBalance, BasePosition, YieldSummaryData } from "./common";

export type VaultPosition = BasePosition & {
  vaultAddress: string;
  underlyings: AssetWithBalance[];
  apr: number | null;
};

export type VaultResult = VaultPosition[];

export type VaultSummary = YieldSummaryData;
