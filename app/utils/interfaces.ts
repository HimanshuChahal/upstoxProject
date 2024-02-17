export interface HoldingItemType {
  symbol: string;
  quantity: number;
  ltp: number;
  avgPrice: number;
  close: number;
}

export interface HoldingResponseType {
  userHolding: HoldingItemType[];
}
