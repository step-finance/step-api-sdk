import { DexResult, DexSummary } from "./dex";
import { DomainResult, DomainSummary } from "./domain";
import { FarmResult, FarmSummary } from "./farm";
import { LendingResult, LendingSummary } from "./lending";
import { LiquidityResult, LiquiditySummary } from "./liquidity";
import { MarginResult, MarginSummary } from "./margin";
import { NFTResult, NFTSummary } from "./nft";
import { NFTMarketResult, NFTMarketSummary } from "./nftmarket";
import { StakingResult, StakingSummary } from "./staking";
import { TokenResult, TokenSummary } from "./token";
import { ValidatorResult, ValidatorSummary } from "./validator";
import { VaultResult, VaultSummary } from "./vault";

export type PortfolioPositionsResponse = {
  wallet: string;
  positions: Partial<AggregateResult>;
  summary: SummaryPositionsResult;
  status: "ok" | "stale" | "error";
};

export type AggregateResult = {
  token: TokenResult;
  domain: DomainResult;
  dex: DexResult;
  liquidity: LiquidityResult;
  staking: StakingResult;
  farm: FarmResult;
  vault: VaultResult;
  margin: MarginResult;
  lending: LendingResult;
  validator: ValidatorResult;
  nftmarket: NFTMarketResult;
  nft: NFTResult;
};

export type SummaryPositions = {
  token: TokenSummary;
  domain: DomainSummary;
  dex: DexSummary;
  liquidity: LiquiditySummary;
  staking: StakingSummary;
  farm: FarmSummary;
  vault: VaultSummary;
  margin: MarginSummary;
  lending: LendingSummary;
  validator: ValidatorSummary;
  nftmarket: NFTMarketSummary;
  nft: NFTSummary;
};

export type SummaryPositionsResult = {
  positions: Partial<SummaryPositions>;
  aggregated: AggregateSummary;
  statuses: {
    [type: string]: {
      [provider: string]: {
        error: string | null;
        duration: number;
        asOf: number;
      };
    };
  };
  staleJobs: string[];
};

export type AggregateSummary = {
  netWorth: number;
  tokenValue: number;
  nftValue: number;
  nftDefiValue: number;
  defiValue: number;
  totalPendingReward: number;
  estimated24hReward: number;
};

export type PortfolioDataQueryParams = {
  maxWaitTime?: number;
  staleTime?: number;
  showSmallBalances?: boolean;
  showcNFTs?: boolean;
  modules?: string;
  excludeModules?: string;
};
