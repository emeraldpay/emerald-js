import { JsonRpc } from '@emeraldplatform/rpc';

export default class Web3Api {
  rpc: JsonRpc;

  constructor(jsonRpc: JsonRpc) {
    this.rpc = jsonRpc;
  }

  /**
   * Returns the current client version.
   */
  clientVersion(): Promise<string> {
    return this.rpc.call('web3_clientVersion', []);
  }
}