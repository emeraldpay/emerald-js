export interface AbiMethod {

}

export interface InputValues {
    [name: string]: string;
}

export interface OutputValue {
    type: string;
    name: string;
    value: string | number;
}

export declare function functionToData(func: AbiMethod, inputs: InputValues): string;
export declare function dataToParams(func: AbiMethod, data: string): Array<OutputValue>;
