import * as React from 'react';
import contracts from '@emeraldplatform/contracts';
import EthRpc from './EthRpc';

interface Props {
  method: string;
  params: Array<any>;
  abi?: any;
  address: string;
  refresh: number;
  children?: any;
  renderEmpty?: any;
};

interface State {
  data: any;
};

class ContractProvider extends React.Component<Props, State> {
  static defaultProps = {
    method: null,
    params: null,
    abi: null,
    refresh: null
  };

  constructor(props) {
    super(props);
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