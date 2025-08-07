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

export type RepeatingOrderPosition = BasePosition & {
  strategyType: string;
  positionAddress: string;
  inAsset: AssetInfo;
  outAsset: AssetInfo;
  saleAmountPerCycle: number;
  saleAmountPerCycleString: string;

  inDeposited: number;
  inDepositedString: string;

  inWithdrawn: number;
  inWithdrawnString: string;

  inRemaining: number;
  inRemainingString: string;

  inUsed: number;
  inUsedString: string;

  outReceived: number;
  outReceivedString: string;

  outWithdrawn: number;
  outWithdrawnString: string;

  outBalance: number;
  outBalanceString: string;

  pctComplete: number;
  createdAt: number;
  nextOrderAt: number;
  orderInterval: number;
  //NOTE: valueInUSD = (inDeposited - inWithdrawn) * (inAsset.priceInUSD) + (outReceived - outWithdrawn) * (outAsset.priceInUSD)
};

export type DexResult = {
  order: ClobOrder[];
  unsettledBalance: ClobUnsettledBalance[];
  repeatingOrder: RepeatingOrderPosition[];
};

export type DexSummary = {
  order: ValueSummaryData;
  unsettledBalance: ValueSummaryData;
  repeatingOrder: ValueSummaryData;
};
