import { JsonRpc } from '@emeraldplatform/rpc';
import { convert } from '@emeraldplatform/core';

export default class NetApi {
  rpc: JsonRpc;

  constructor(jsonRpc: JsonRpc) {
    this.rpc = jsonRpc;
  }

  /**
   * Returns the current network id.
   */
  version(): Promise<string> {
    return this.rpc.call('net_version', []);
  }

  /**
   * Returns `true` if client is actively listening for network connections.
   */
  listening(): Promise<boolean> {
    return this.rpc.call('net_listening', []);
  }

  /**
   * Returns number of peers currently connected to the client.
   */
  peerCount(): Promise<number> {
    return this.rpc.call('net_peerCount', [])
      .then((result: any) => convert.toNumber(result));
  }
}
