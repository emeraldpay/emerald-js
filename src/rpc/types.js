// @flow
export type CallObject = {
  to: string,
  data: string,
};

interface SyncingStatus {
  startingBlock: number;
  currentBlock: number;
  highestBlock: number;
}
export type SyncingResult = false | SyncingStatus;
