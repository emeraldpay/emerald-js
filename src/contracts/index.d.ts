interface AbiMethod {

}

interface InputValues {
    [name: string]: string;
}

export declare function functionToData(func: AbiMethod, inputs: InputValues): string;
