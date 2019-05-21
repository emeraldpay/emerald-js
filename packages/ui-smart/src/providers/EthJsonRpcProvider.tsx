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
      url: props.url,
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