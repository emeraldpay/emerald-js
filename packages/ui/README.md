React components

## How to run
`npm install`

`npm run storybook`

## How to use

#### Install @emeraldplatform/ui package

`npm install -S @emeraldplatform/ui`

or

`yarn add @emeraldplatform/ui`

#### Install material-ui

`npm install material-ui`

or

`yarn add material-ui`

#### Configure MUI Theme
Somewhere in `index.js`
```js
...
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import theme from 'emerald-js-ui/src/theme.json';
...

const muiTheme = getMuiTheme(theme);

const App = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <Main />
    </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('app'));
```

#### Using icons
```js

import { Block as BlockIcon } from 'emerald-js-ui/lib/icons2';


```
## Contact
Chat with us via [Gitter](https://gitter.im/ethereumproject/emerald-wallet)