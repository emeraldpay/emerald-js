/* import React from 'react';
 * import PropTypes from 'prop-types';
 * import { storiesOf } from '@storybook/react';
 * import { action } from '@storybook/addon-actions';
 * import { withKnobs, text, boolean, number, array, object } from '@storybook/addon-knobs/react';
 * import muiThemeable from 'material-ui/styles/muiThemeable';
 * import theme from '../../src/theme.json';
 * import CreateTransaction from '../../src/components/CreateTransaction';
 * import Page from '../../src/components/Page';
 * import Back from '../../src/icons3/Back';
 * 
 * const PAGES = {
 *   TX: 1,
 *   SIGN: 2,
 *   DETAILS: 3,
 * };
 * 
 * const DEFAULT_GAS_LIMIT = '21000';
 * 
 * class _CreateTransaction extends React.Component {
 *   static propTypes = {
 *     currency: PropTypes.string.isRequired,
 *     balance: PropTypes.string.isRequired,
 *     fiatBalance: PropTypes.string.isRequired,
 *     tokenSymbols: PropTypes.arrayOf(PropTypes.string).isRequired,
 *     addressBookAddresses: PropTypes.arrayOf(PropTypes.string).isRequired,
 *     ownAddresses: PropTypes.arrayOf(PropTypes.string).isRequired,
 *     txFee: PropTypes.string.isRequired,
 *     txFeeFiat: PropTypes.string.isRequired,
 *     toAddress: PropTypes.string,
 *     onEmptyAddressBookClick: PropTypes.func.isRequired,
 *   };
 * 
 *   constructor() {
 *     super();
 *     this.onChangeFrom = this.onChangeFrom.bind(this);
 *     this.onChangeTo = this.onChangeTo.bind(this);
 *     this.onChangeToken = this.onChangeToken.bind(this);
 *     this.onChangeGasLimit = this.onChangeGasLimit.bind(this);
 *     this.onChangeAmount = this.onChangeAmount.bind(this);
 *     this.getPage = this.getPage.bind(this);
 *     this.state = { gasLimit: DEFAULT_GAS_LIMIT, amount: '0', page: PAGES.TX };
 *   }
 * 
 *   onChangeFrom(from) {
 *     this.setState({ from });
 *     action('onChangeFrom')(from);
 *   }
 * 
 *   onChangeTo(to) {
 *     this.setState({ to });
 *     action('onChangeTo')(to);
 *   }
 * 
 *   onChangeToken(token) {
 *     this.setState({ token });
 *     action('onChangeToken')(token);
 *   }
 * 
 *   onChangeGasLimit(value) {
 *     this.setState({ gasLimit: value || DEFAULT_GAS_LIMIT });
 *   }
 * 
 *   onChangeAmount(amount) {
 *     this.setState({ amount });
 *   }
 * 
 *   componentDidMount() {
 *     this.setState({
 *       token: this.props.tokenSymbols[0],
 *       to: this.props.toAddress,
 *     });
 *   }
 * 
 *   getPage() {
 *     switch (this.state.page) {
 *       case PAGES.TX:
 *         return (
 *           <CreateTransaction
 *             {...this.state}
 *             {...this.props}
 *             onChangeFrom={this.onChangeFrom}
 *             onChangeToken={this.onChangeToken}
 *             onChangeGasLimit={this.onChangeGasLimit}
 *             onChangeAmount={this.onChangeAmount}
 *             onChangeTo={this.onChangeTo}
 *           />
 *         );
 *       case PAGES.PASSWORD:
 *         return (<div>PASSWORD</div>);
 *       default: return null;
 *     }
 *   }
 * 
 *   render() {
 *     return (
 *       <div style={{ padding: '20px' }}>
 *         <Page title="Create Transaction" leftIcon={<Back />}>
 *           {this.getPage()}
 *         </Page>
 *       </div>
 *     );
 *   }
 * }
 * 
 * const ThemedCreateTransaction = muiThemeable()(_CreateTransaction);
 * 
 * 
 * storiesOf('Create Transaction', module)
 *   .addDecorator(muiTheme([theme]))
 *   .addDecorator(withKnobs)
 *   .add('all', () => (
 *     <ThemedCreateTransaction
 *       currency={text('Currency', 'USD')}
 *       balance={text('Balance', '115.15515')}
 *       fiatBalance={text('Fiat Balance', '2815.55')}
 *       tokenSymbols={array('Token Symbols', ['ETC', 'BEC'])}
 *       addressBookAddresses={array('Address Book Addresses', [])}
 *       ownAddresses={array('Own Account Addreses', ['0x01'])}
 *       txFee={text('TxFee', '0.0042')}
 *       txFeeFiat={text('TxFeeFiat', '1')}
 *       toAddress={text('To Address', '0x00')}
 *       onEmptyAddressBookClick={() => { console.log('clicked'); }}
 *     />
 *   ));
 * */
