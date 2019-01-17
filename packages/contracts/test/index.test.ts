import { functionToData, dataToParams } from '../src/index';

const balanceOfABI = {
  constant: true,
  inputs: [{ name: '_owner', type: 'address' }],
  name: 'balanceOf',
  outputs: [{ name: 'balance', type: 'uint256' }],
  payable: false,
  type: 'function',
};

const transferABI = {
  constant: false,
  inputs: [{ name: '_to', type: 'address' }, { name: '_value', type: 'uint256' }],
  name: 'transfer',
  outputs: [{ name: 'success', type: 'bool' }],
  payable: false,
  type: 'function',
};


describe('Function to Data Field Converter', () => {
  const balanceArgs = { _owner: '0xbb0000000aaaa000000000000000000000000bb' };
  const transferArgs = { _to: '0xaa00000000bbbb000000000000000000000000aa', _value: 10 };

  it('convert function to data', () => {
    expect(functionToData(balanceOfABI, balanceArgs))
      .toEqual('0x70a082310000000000000000000000000bb0000000aaaa000000000000000000000000bb');
  });

  it('convert function to data', () => {
    expect(functionToData(transferABI, transferArgs))
      .toEqual('0xa9059cbb000000000000000000000000aa00000000bbbb000000000000000000000000aa000000000000000000000000000000000000000000000000000000000000000a');

    expect(functionToData(transferABI, { _to: '0x0178537bb1d7bb412101cdb7389c28fd4cf5ac0a', _value: 100 }))
      .toEqual('0xa9059cbb0000000000000000000000000178537bb1d7bb412101cdb7389c28fd4cf5ac0a0000000000000000000000000000000000000000000000000000000000000064');

    expect(functionToData(transferABI, { _to: '0x0178537bb1d7bb412101cdb7389c28fd4cf5ac0a', _value: 100000000 }))
      .toEqual('0xa9059cbb0000000000000000000000000178537bb1d7bb412101cdb7389c28fd4cf5ac0a0000000000000000000000000000000000000000000000000000000005f5e100');
  });
});

describe('Data to Params Converter', () => {
  const fxn = {
    inputs: [{ name: '_owner', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', type: 'uint32' }],
  };

  it('convert data to number', () => {
    const data = '000000000000000000000000000000000000000000000000000000000000002a';
    expect(dataToParams(fxn, data)[0].value.toString()).toEqual('42');
  });
  it('convert data to number', () => {
    const data = '0x000000000000000000000000000000000000000000000000000000000000002a';
    expect(dataToParams(fxn, data)[0].value.toString()).toEqual('42');
  });
  it('convert data to array of numbers', () => {
    fxn.outputs = [{ name: 'balance', type: 'uint256[]' }];
    const data = '00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000003';
    expect(dataToParams(fxn, data)[0].value.toString()).toEqual('1,2,3');
  });
  it('convert data to array of outputs', () => {
    fxn.outputs = [
      { name: 'balance', type: 'uint32' },
      { name: 'success', type: 'bool' },
    ];
    const data = '0000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000002a';
    expect(dataToParams(fxn, data).length).toEqual(2);
    expect(dataToParams(fxn, data)[1].value).toEqual(false);
  });
});
