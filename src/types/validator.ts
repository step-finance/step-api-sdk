import type { BasePosition, YieldSummaryData } from "./common";

export type ValidatorStakeStatus = "active" | "inactive" | "deactivating" | "activating";

export type ValidatorStakingPosition = Omit<BasePosition, "platform"> & {
  logoURI?: string;
  validatorAddress: string | null;
  stakeAccountAddress: string;
  authorizedStakerAddress: string | null;
  avg24hRewardInUSD: number;
  balance: number; // total SOL in the account including rentExemptReserve
  balanceString: string;
  activeStakeBalance: number; // balance of activated SOL stake
  activeStakeBalanceString: string;
  inactiveBalance: number; // inactive SOL balance excluding rentExemptReserve
  inactiveBalanceString: string;
  status: ValidatorStakeStatus;
};

export type ValidatorResult = ValidatorStakingPosition[];

export type ValidatorSummary = YieldSummaryData;
