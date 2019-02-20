import JsonRpcProvider from './rpc';
import { JsonRpc, Transport } from '@emeraldplatform/rpc';

describe('JsonRpcProvider', () => {
  it('has constructor', () => {
    const provider = new JsonRpcProvider(new JsonRpc({} as Transport));
    expect(provider).toBeDefined();
  });
});
