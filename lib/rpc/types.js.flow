// @flow
export type CallObject = {
  to: string,
  data: string,
  nonce?: number,
  gas?: number,
};

interface SyncingStatus {
  startingBlock: number;
  currentBlock: number;
  highestBlock: number;
}
export type SyncingResult = false | SyncingStatus;
