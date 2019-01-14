import JsonRpcProvider from './rpc';

describe('JsonRpcProvider', () => {
  it('has constructor', () => {
    const provider = new JsonRpcProvider();
    expect(provider).toBeDefined();
  });
});
