import { methodID, rawDecode, rawEncode } from 'ethereumjs-abi';
import BigNumber from 'bignumber.js';

const ethAbi = { methodID, rawDecode, rawEncode };
/**
 * Converts function input parameters to TX's data field.
 */
export function functionToData(func, inputs): string {
  if (func) {
    const types = [];
    const values = [];
    func.inputs.forEach((input) => {
      types.push(input.type);
      values.push(inputs[input.name]);
    });
    const data = Buffer.concat([
      ethAbi.methodID(func.name, types),
      ethAbi.rawEncode(types, values)]).toString('hex');
    return `0x${data}`;
  }
  throw new Error(`Invalid function ABI: ${func}`);
}


export function dataToParams(func, data) {
  const buffer = Buffer.from(data.replace('0x', ''), 'hex');
  const types = func.outputs.map(output => output.type);
  const params = ethAbi.rawDecode(types, buffer);
  return func.outputs.map((o, i) => ({
    type: o.type,
    name: o.name,
    value: (params[i] instanceof BigNumber) ? params[i].toString() : params[i],
  }));
}

export default {
  functionToData,
  dataToParams,
};

export { default as Contract } from './Contract';