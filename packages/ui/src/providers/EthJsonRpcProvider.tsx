import * as React from 'react';

export const EthJsonRpcContext = React.createContext({});

interface Props {
  url: string;
};

interface State {

};

export class EthJsonRpcProvider extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      url: props.url || 'https://web3.gastracker.io/',
      changeUrl: url => {
        this.setState({
          ...this.state,
          url
        });
      }
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.url !== this.props.url) {
      this.setState({
        ...this.state,
        url: this.props.url
      })
    }
  }

  render() {
    return (
      <EthJsonRpcContext.Provider value={this.state}>
        {this.props.children}
      </EthJsonRpcContext.Provider>
    );
  }
}

export default EthJsonRpcProvider;