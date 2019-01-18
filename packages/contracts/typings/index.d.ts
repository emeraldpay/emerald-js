declare module 'ethereumjs-abi' {
    import { Buffer } from 'safe-buffer'
  
    export function soliditySHA3 (types: string[], values: any[]): Buffer
    export function rawEncode (types: string[], values: any[]): Buffer
    export function encodeSingle (type: string, value: any): Buffer
    export function rawDecode<A> (types: string[], data: Buffer): A
  }