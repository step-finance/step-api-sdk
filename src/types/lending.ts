import type { AssetInfo, BasePosition, ValueSummaryData, YieldSummaryData } from "./common";

export type TokenLendingPosition = Omit<BasePosition, "title"> & {
  asset: AssetInfo;
  balance: number;
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
  loanEndTs: number | null;
  interestAmountInSol: number;
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
