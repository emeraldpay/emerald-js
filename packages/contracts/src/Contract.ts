import { methodID, rawEncode } from 'ethereumjs-abi';

export interface IAbiFunction {
    name: string;
    inputs: any;
    outputs: any;
};

type ContractAbi = Array<IAbiFunction>;

export default class Contract {
    abi: ContractAbi;

    constructor(abi: ContractAbi) {
      this.abi = abi;
    }

    getFunction(name: string): IAbiFunction {
        const found = this.abi.filter((f) => (f.name === name));
        if (found.length > 0) {
            return found[0];
        }
        return null;
    }

    functionToData(name: string, inputs): string {
      const func = this.getFunction(name);
      if (func) {
        const types = [];
        const values = [];
        func.inputs.forEach((input) => {
          types.push(input.type);
          values.push(inputs[input.name]);
        });
        const data = Buffer.concat([
          methodID(func.name, types),
          rawEncode(types, values)]
        ).toString('hex');
        return `0x${data}`;
      }
      throw new Error(`Function ${name} not found in ABI`);
    }
}
