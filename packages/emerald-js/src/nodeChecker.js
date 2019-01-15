// @flow
import EthRpc from './rpc/ethrpc';
import convert from './convert';

type NodeInfo = {
    chain: string,
    chainId: number,
    clientVersion: string,
}

export default class NodeChecker {
    ethRpc: EthRpc;

    static ETC_MAINNET_GENESIS: string = '0xd4e56740f876aef8c010b86a40d5f56745a118d0906a34e69aec8c0db1cb8fa3';
    static ETC_MORDEN_GENESIS: string = '0x0cd786a2425d16f152c658316c423e6ce1181e15c3295826d7c9904cba9ce303';
    static ETC_BLOCK_2000000: string = '0x3b56d9e73aa7cac630eb718c24923757a7d08b2b1a52d62676a1749e1f345be3';
    static ETH_BLOCK_2000000: string = '0xc0f4906fea23cf6f3cce98cb44e8e1449e455b28d684dfa9ff65426495584de6';

    constructor(ethRpc: EthRpc) {
      this.ethRpc = ethRpc;
    }

    check(): Promise<NodeInfo> {
      return this.exists()
        .then(clientVersion => this.getChain()
          .then(chain => ({
            ...chain,
            clientVersion,
          })));
    }

    exists() {
      return this.ethRpc.web3.clientVersion();
    }

    getChain(): Promise<any> {
      return new Promise((resolve, reject) => {
        this.ethRpc.eth.getBlockByNumber('0x0', false).then((result) => {
          if (result.hash === NodeChecker.ETC_MAINNET_GENESIS) {
            // try to detect ethereum fork
            this.ethRpc.eth.getBlockByNumber(convert.toHex(2000000)).then((block2000000) => {
              if (block2000000) {
                if (block2000000.hash === NodeChecker.ETH_BLOCK_2000000) {
                  resolve({ chain: 'mainnet', chainId: 1 });
                } else if (block2000000.hash === NodeChecker.ETC_BLOCK_2000000) {
                  resolve({ chain: 'mainnet', chainId: 61 });
                } else {
                  reject(new Error(`Unknown chain block#2000000 ${block2000000.hash}`));
                }
              } else {
                resolve({ chain: 'mainnet', chainId: 61 });
              }
            });
          } else if (result.hash === NodeChecker.ETC_MORDEN_GENESIS) {
            resolve({ chain: 'morden', chainId: 62 });
          } else {
            resolve({ chain: 'unknown', chainId: 0 });
          }
        }).catch((error) => {
          reject(error);
        });
      });
    }
}
