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
import { methodID, rawDecode, rawEncode } from 'ethereumjs-abi';
import BigNumber from 'bignumber.js';

const ethAbi = { methodID, rawDecode, rawEncode };

export interface InputValues {
  [name: string]: string | number;
}

export interface OutputValue {
  type: string;
  name: string;
  value: string | number;
}

/**
 * Converts function input parameters to TX's data field.
 */
export function functionToData(func: any, inputs: InputValues): string {
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

export function dataToParams(func: any, data: string): Array<OutputValue> {
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