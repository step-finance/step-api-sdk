import type { BasePosition, ValueSummaryData } from "./common";

export type DomainPosition = Omit<BasePosition, "platform" | "valueInUSD"> & {
  accountAddress: string;
};

export type DomainResult = DomainPosition[];

export type DomainSummary = ValueSummaryData;
