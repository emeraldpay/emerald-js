import JsonRpcProvider from './rpc';
import { DefaultJsonRpc, Transport } from '@emeraldplatform/rpc';

describe('JsonRpcProvider', () => {
  it('has constructor', () => {
    const provider = new JsonRpcProvider(new DefaultJsonRpc({} as Transport));
    expect(provider).toBeDefined();
  });
});
