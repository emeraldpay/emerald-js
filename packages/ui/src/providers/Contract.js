import React from 'react';
import { contracts } from '@emeraldplatform/emerald-js';
import PropTypes from 'prop-types';
import EthRpc from './EthRpc';

class ContractProvider extends React.Component {
  static propTypes = {
    method: PropTypes.string.isRequired,
    params: PropTypes.array,
    abi: PropTypes.object.isRequired,
    address: PropTypes.string.isRequired,
    refresh: PropTypes.number
  };

  static defaultProps = {
    method: null,
    params: null,
    abi: null,
    refresh: null
  };

  constructor() {
    super();

    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    this.setData();
  }

  componentDidUpdate(prevProps, prevState) {
    const abiChanged = prevProps.abi !== this.props.abi;
    const methodChanged = prevProps.method !== this.props.method;
    const paramsChanged = prevProps.params !== this.props.params;
    const addressChanged = prevProps.address !== this.props.address;

    if (addressChanged || abiChanged || methodChanged || paramsChanged) {
      return this.setData();
    }
  }

  setData() {
    const func = this.props.abi.find((f) => f.name === this.props.method);
    const data = contracts.functionToData(func, this.props.params);
    this.setState({data});
  }


  render() {
    if (this.state.data === null) { return null; }
    return (
      <EthRpc method="eth.call" params={[{to: this.props.address, data: this.state.data}]} refresh={this.props.refresh}>
        {result => {
           if (result === 0) {
             return this.props.renderEmpty();
           }
           const func = this.props.abi.find((f) => f.name === this.props.method);
           const decodedResult = contracts.dataToParams(func, result);
           return this.props.children(decodedResult);
        }}
      </EthRpc>
    );
  }
}

export default ContractProvider;