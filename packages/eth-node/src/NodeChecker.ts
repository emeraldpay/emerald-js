/*
Copyright 2019 ETCDEV GmbH

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import { EthRpc } from '@emeraldplatform/eth-rpc';
import { convert } from '@emeraldplatform/core';
import {DefaultBatch} from "@emeraldplatform/rpc";

type NodeInfo = {
    chain: string,
    chainId: number,
    clientVersion: string,
}

export default class NodeChecker {
    ethRpc: EthRpc;

    static ETC_MAINNET_GENESIS: string = '0xd4e56740f876aef8c010b86a40d5f56745a118d0906a34e69aec8c0db1cb8fa3';
    static ETC_MORDEN_GENESIS: string =  '0x0cd786a2425d16f152c658316c423e6ce1181e15c3295826d7c9904cba9ce303';
    static ETC_BLOCK_1920000: string = '0x94365e3a8c0b35089c1d1195081fe7489b528a84b22199c916180db8b28ade7f';
    static ETH_BLOCK_1920000: string = '0x4985f5ca3d2afbec36529aa96f74de3cc10a2a4a6c44f2157a57d2c6059a11bb';

    constructor(ethRpc: EthRpc) {
      this.ethRpc = ethRpc;
    }

    exists() {
      return this.ethRpc.web3.clientVersion();
    }

    check(): Promise<NodeInfo> {
      return new Promise((resolve, reject) => {
        let batch = new DefaultBatch();
        let nodeInfo: NodeInfo = {
          chain: 'unknown',
          chainId: 0,
          clientVersion: null
        };
        batch.addCall('eth_getBlockByNumber', ['0x00', false])
          .then((block) => {
            if (block.hash === NodeChecker.ETC_MAINNET_GENESIS) {
              nodeInfo.chain = nodeInfo.chain || 'ethereum';
              nodeInfo.chainId = nodeInfo.chainId || 1;
            } else if (block.hash === NodeChecker.ETC_MORDEN_GENESIS) {
              nodeInfo.chain = 'morden';
              nodeInfo.chainId = 62;
            }
          }).catch(reject);
        batch.addCall('eth_getBlockByNumber', ['0x1d4c00', false])
          .then((block) => {
            if (block.hash === NodeChecker.ETC_BLOCK_1920000) {
              nodeInfo.chain = "etc";
              nodeInfo.chainId = 61;
            } else if (block.hash === NodeChecker.ETH_BLOCK_1920000) {
              nodeInfo.chain = "ethereum";
              nodeInfo.chainId = 1;
            }
          }).catch(reject);
        batch.addCall('web3_clientVersion', [])
          .then((version) => {
            nodeInfo.clientVersion = version;
          })
          .catch(reject);
        this.ethRpc.rpc.execute(batch)
          .then((_) => resolve(nodeInfo))
          .catch(reject);
      });
    }
}
