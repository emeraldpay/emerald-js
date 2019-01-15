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

test('getFiat() default rate is 0', () => {
  expect(new Wei(1000010000000000000).getFiat()).toEqual('0.00');
  expect(new Wei(1000010000000000000).getFiat(null)).toEqual('0.00');
});

test('getFiat() when rate has more than 15 s.d.', () => {
  expect(new Wei(100000000000000000).getFiat(114.12768558799999)).toEqual('11.41');
});

test('equals() compares values', () => {
  expect(new Wei(1).equals(new Wei(1))).toBeTruthy();
  expect(new Wei(0).equals(Wei.ZERO)).toBeTruthy();
});

