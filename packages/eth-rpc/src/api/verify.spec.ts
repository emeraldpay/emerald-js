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
import {VerifyBlockHash, VerifyGenesis, VerifyMinPeers, VerifyNotSyncing} from "./verify";
import {DefaultBatch} from "@emeraldplatform/rpc";

// ==========================================================================================
// VerifyMinPeers
describe('VerifyMinPeers', () => {

  it('fails on negative number', () => {
    expect(() => new VerifyMinPeers(-1)).toThrow();
  });

  it('VerifyMinPeers: accepts good value', () => {
    const batch = new DefaultBatch();
    const verify = new VerifyMinPeers(3);
    verify.setup(batch);

    batch.getItems()[0].response = {
      jsonrpc: '2.0',
      result: '0x1f'
    };
    return Promise.all(batch.resolve()).then((_) => {
      return verify.verify()
    }).then((act) => {
      expect(act).toBe(true);
    });
  });

  it('VerifyMinPeers: reject small value', () => {
    const batch = new DefaultBatch();
    const verify = new VerifyMinPeers(3);
    verify.setup(batch);

    batch.getItems()[0].response = {
      jsonrpc: '2.0',
      result: '0x02'
    };
    return Promise.all(batch.resolve()).then((_) => {
      return verify.verify()
    }).then((act) => {
      expect(act).toBe(false);
    });
  });

  it('VerifyMinPeers: reject invalid value', () => {
    const batch = new DefaultBatch();
    const verify = new VerifyMinPeers(3);
    verify.setup(batch);

    batch.getItems()[0].response = {
      jsonrpc: '2.0',
      result: '0x'
    };
    return Promise.all(batch.resolve()).then((_) => {
      return verify.verify()
    }).then((act) => {
      expect(act).toBe(false);
    });
  });

});


// ==========================================================================================
// VerifyNotSyncing
describe('VerifyNotSyncing', () => {

  it('VerifyNotSyncing: accepts good state', () => {
    const batch = new DefaultBatch();
    const verify = new VerifyNotSyncing();
    verify.setup(batch);

    batch.getItems()[0].response = {
      jsonrpc: '2.0',
      result: false
    };
    return Promise.all(batch.resolve())
      .then((_) => verify.verify())
      .then((act) => expect(act).toBe(true));
  });

  it('VerifyNotSyncing: reject bad state', () => {
    const batch = new DefaultBatch();
    const verify = new VerifyNotSyncing();
    verify.setup(batch);

    batch.getItems()[0].response = {
      jsonrpc: '2.0',
      result: {
        startingBlock: '0x400',
        currentBlock: '0x514',
        highestBlock: '0x1412'
      }
    };
    return Promise.all(batch.resolve())
      .then((_) => verify.verify())
      .then((act) => expect(act).toBe(false)
      );
  });
});

// ==========================================================================================
// VerifyGenesis
describe('VerifyGenesis', () => {
  it('VerifyGenesis: accepts good state', () => {
    const batch = new DefaultBatch();
    const verify = new VerifyGenesis('0xd4e56740f876aef8c010b86a40d5f56745a118d0906a34e69aec8c0db1cb8fa3');
    verify.setup(batch);

    batch.getItems()[0].response = {
      jsonrpc: '2.0',
      result: {
        number: '0x0',
        hash: '0xd4e56740f876aef8c010b86a40d5f56745a118d0906a34e69aec8c0db1cb8fa3'
      }
    };
    return Promise.all(batch.resolve())
      .then((_) => verify.verify())
      .then((act) => expect(act).toBe(true)
      );
  });

  it('VerifyGenesis: reject bad state', () => {
    const batch = new DefaultBatch();
    const verify = new VerifyGenesis('0xd4e56740f876aef8c010b86a40d5f56745a118d0906a34e69aec8c0db1cb8fa3');
    verify.setup(batch);

    batch.getItems()[0].response = {
      jsonrpc: '2.0',
      result: {
        number: '0x0',
        hash: '0x88e96d4537bea4d9c05d12549907b32561d3bf31f45aae734cdc119f13406cb6'
      }
    };
    return Promise.all(batch.resolve())
      .then((_) => verify.verify())
      .then((act) => expect(act).toBe(false)
      );
  });
});

// ==========================================================================================
// VerifyBlockHash
  describe('VerifyBlockHash', () => {
    it('VerifyBlockHash: accepts good block', () => {
      const batch = new DefaultBatch();
      const verify = new VerifyBlockHash(1920000, '0x94365e3a8c0b35089c1d1195081fe7489b528a84b22199c916180db8b28ade7f');
      verify.setup(batch);

      batch.getItems()[0].response = {
        jsonrpc: '2.0',
        result: {
          number: '0x1d4c00',
          hash: '0x94365e3a8c0b35089c1d1195081fe7489b528a84b22199c916180db8b28ade7f'
        }
      };
      batch.getItems()[1].response = {
        jsonrpc: '2.0',
        result: '0x1e8480'
      };
      return Promise.all(batch.resolve())
        .then((_) => verify.verify())
        .then((act) => expect(act).toBe(true)
        );
    });

    it('VerifyBlockHash: ignore block not synced', () => {
      const batch = new DefaultBatch();
      const verify = new VerifyBlockHash(1920000, '0x94365e3a8c0b35089c1d1195081fe7489b528a84b22199c916180db8b28ade7f');
      verify.setup(batch);

      batch.getItems()[0].response = {
        jsonrpc: '2.0',
        result: null
      };
      batch.getItems()[1].response = {
        jsonrpc: '2.0',
        result: '0x1d24f0'
      };
      return Promise.all(batch.resolve())
        .then((_) => verify.verify())
        .then((act) => expect(act).toBe(true)
        );
    });

    it('VerifyBlockHash: reject bad state', () => {
      const batch = new DefaultBatch();
      const verify = new VerifyBlockHash(1920000, '0x94365e3a8c0b35089c1d1195081fe7489b528a84b22199c916180db8b28ade7f');
      verify.setup(batch);

      batch.getItems()[0].response = {
        jsonrpc: '2.0',
        result: {
          number: '0x1d4c00',
          hash: '0x4985f5ca3d2afbec36529aa96f74de3cc10a2a4a6c44f2157a57d2c6059a11bb'
        }
      };
      batch.getItems()[1].response = {
        jsonrpc: '2.0',
        result: '0x1e8480'
      };
      return Promise.all(batch.resolve())
        .then((_) => verify.verify())
        .then((act) => expect(act).toBe(false));
    });
  });
