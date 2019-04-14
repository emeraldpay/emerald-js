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