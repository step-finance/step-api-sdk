import { BasePosition, AssetInfo, AssetWithBalance, ValueSummaryData } from "./common";

export type ClobOrder = BasePosition & {
  assets: AssetInfo[]; // always base asset at index 0, quote at index 1. eg. STEP/SOL [step, sol]
  isBid: boolean;
  size: number;
  sizeString: string;
  offerPriceInUSD: number | null;
  marketAddress?: string; // only applies to Serum/Openbook
  orderAddress?: string; // only applies to Serum/Openbook
  orderId?: string; // only applies to Serum/Openbook
  marketEventCount?: number; // only applies to Serum/Openbook
  //NOTE: valueInUSD = isBid ? (size * offerPriceInUSD) : (size * priceInUSD(baseMint))
};

export type ClobUnsettledBalance = BasePosition & {
  assets: AssetWithBalance[];
  marketAddress: string;
};

export type DexResult = { order: ClobOrder[]; unsettledBalance: ClobUnsettledBalance[] };

export type DexSummary = { order: ValueSummaryData; unsettledBalance: ValueSummaryData };
