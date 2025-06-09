import type { AssetInfo, BasePosition, ValueSummaryData } from "./common";

export type NFTPosition = Omit<BasePosition, "title" | "platform"> & {
  collectionName: string;
  isCompressed: boolean;
  asset: AssetInfo;
  metadataUrl: string;
  balance: number;
  balanceString: string;
  floorPriceInSOL: number | null;
};
export type NFTResult = NFTPosition[];

export type NFTSummary = ValueSummaryData;
