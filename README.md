<h1 align="center">
    <p align="center">Emerald Platform JS SDK</p>
</h1>

[![Build Status](https://travis-ci.org/ETCDEVTeam/emerald-js.svg?branch=master)](https://travis-ci.org/ETCDEVTeam/emerald-js)
[![codecov](https://codecov.io/gh/ETCDEVTeam/emerald-js/branch/master/graph/badge.svg)](https://codecov.io/gh/ETCDEVTeam/emerald-js)



[![Join the chat at https://gitter.im/ethereumproject/emerald-js](https://badges.gitter.im/ethereumproject/emerald-js.svg)](https://gitter.im/ethereumproject/emerald-js?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)



## Typescript/Javascript Packages


| Package                                                  | Version                                                                                                                 | Description                                                                                       |
| -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| [`@emeraldplatform/emerald-js`](/packages/emerald-js)                               | [![npm](https://img.shields.io/npm/v/@emeraldplatform/emerald-js.svg)](https://www.npmjs.com/package/@emeraldplatform/emerald-js)                                   | Ethereum and other auxiliary functions |
| [`@emeraldplatform/contracts`](/packages/contracts) | [![npm](https://img.shields.io/npm/v/@emeraldplatform/contracts.svg)](https://www.npmjs.com/package/@emeraldplatform/contracts) | Ethereum smart contracts interop.    |
| [`@emeraldplatform/ui`](/packages/ui) | [![npm](https://img.shields.io/npm/v/@emeraldplatform/ui.svg)](https://www.npmjs.com/package/@emeraldplatform/ui) | React UI library.    |
| [`@emeraldplatform/ui-icons`](/packages/ui-icons) | [![npm](https://img.shields.io/npm/v/@emeraldplatform/ui-icons.svg)](https://www.npmjs.com/package/@emeraldplatform/ui-icons) | React icons.    |
| [`@emeraldplatform/svg-icons`](/packages/svg-icons) | [![npm](https://img.shields.io/npm/v/@emeraldplatform/svg-icons.svg)](https://www.npmjs.com/package/@emeraldplatform/svg-icons) | SVG and other raw design.    |
| [`@emeraldplatform/rpc`](/packages/rpc) | [![npm](https://img.shields.io/npm/v/@emeraldplatform/rpc.svg)](https://www.npmjs.com/package/@emeraldplatform/rpc) | JSON RPC client.    |
| [`@emeraldplatform/eth-rpc`](/packages/eth-rpc) | [![npm](https://img.shields.io/npm/v/@emeraldplatform/eth-rpc.svg)](https://www.npmjs.com/package/@emeraldplatform/eth-rpc) | Ethereum JSON RPC client.    |
| [`@emeraldplatform/eth-node`](/packages/eth-node) | [![npm](https://img.shields.io/npm/v/@emeraldplatform/eth-node.svg)](https://www.npmjs.com/package/@emeraldplatform/eth-node) | Ethereum node util.    |

# How to use

```
npm install -S @emeraldplatform/emerald-js.git

```

# Development

## Build

```
lerna bootstrap
```

## Tests suite
emerald-js uses [Jest](http://facebook.github.io/jest/) for its test suite. To run tests in the console:

```
yarn test
```

## Tests coverage

You need install codecov util first

```
npm install -g codecov
```

then run tests

```
npm run test:coverage
```

# Contribution

We use [AirBnB JavaScript Style Guide](https://github.com/airbnb/javascript) and [Flow](https://flow.org/) for static type checking.

# License

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