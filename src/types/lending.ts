import type { AssetInfo, BasePosition, ValueSummaryData, YieldSummaryData } from "./common";

export type TokenLendingPosition = Omit<BasePosition, "title"> & {
  asset: AssetInfo;
  poolAddress: string | null;
  poolName: string | null;
  balance: number;
  balanceString: string;
  apr: number | null;
};

export type LeverageFarmPosition = BasePosition & {
  asset: AssetInfo;
  debtInUSD: number | null;
};

export type NFTLendingPosition = Omit<BasePosition, "title"> & {
  mint: string | null;
  nftName: string | null;
  collectionName: string;
  logoURI?: string;
  loanAmount: number;
  loanAmountString: string;
  loanEndTs: number | null;
  interestAmountInSol: number;
  interestAmountInSolString: string;
  status: "borrowed" | "offered" | "lending";
};

export type LendingResult = {
  tokenPosition: TokenLendingPosition[];
  leverageFarmPosition: LeverageFarmPosition[];
  nftPosition: NFTLendingPosition[];
};

export type LendingSummary = {
  tokenPosition: YieldSummaryData;
  leverageFarmPosition: ValueSummaryData;
  nftPosition: ValueSummaryData;
};
