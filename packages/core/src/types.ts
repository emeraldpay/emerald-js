export interface Address {
  isValid(): boolean;
}

export interface Transaction {
  
}

/**
 * Transaction to be signed
 */
export interface TxData {

}

/**
 * Key management for abstract blockchain
 */
export interface Account {
  signTx(txData: TxData): any;
}