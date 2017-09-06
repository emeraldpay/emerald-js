import Wei from './wei';

test('constructor: Wei can not be less 1', () => {
  expect(new Wei(0.123456789).value().toString()).toBe('0');
});

test('getEther returns string', () => {
  const v = new Wei(1000010000000000000).getEther();
  expect(typeof v).toEqual('string');
});

test('getEther uses 5 decimals as default', () => {
  expect(new Wei(1000010000000000000).getEther()).toEqual('1.00001');
  expect(new Wei(1000010000000000000).getEther(null)).toEqual('1.00001');
});

