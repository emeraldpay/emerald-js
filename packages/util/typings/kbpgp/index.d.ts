declare module 'kbpgp' {
  export namespace keyring {
    class KeyRing {
      add_key_manager(km: any): any;
      fetch(key_ids: any, ops: any, cb: any): any;
      find_best_key(_arg: any, cb: any): any;
      lookup(key_id: any): any;
    }
  }
  const KeyManager: any;
  function unbox(a: any, b: any): any;
}