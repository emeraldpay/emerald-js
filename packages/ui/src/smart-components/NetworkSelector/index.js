import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Network as NetworkIcon } from '@emeraldplatform/ui-icons';
import { Button, Menu, MenuItem, Typography } from '@material-ui/core';

import EthRpc from '../../providers/EthRpc';
import { EthJsonRpcProvider, EthJsonRpcContext } from '../../providers/EthJsonRpcProvider';


const styles = theme => ({
  root: {},
  networkIcon: {
    marginRight: theme.spacing.unit
  }
});

const networks = [
  {
    url: 'https://web3.gastracker.io/morden',
    name: 'Gastracker',
  },
  {
    url: 'https://web3.gastracker.io/',
    name: 'Gastracker',
  },
  {
    url: 'http://localhost:8545',
    name: 'Local',
  }
];

class NetworkSelector extends React.Component {

  state = {
    anchorEl: null,
    selectedIndex: 0,
  };

  handleClickListItem = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuItemClick = (event, index) => {
    this.setState({ anchorEl: null });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const { classes } = this.props;

    return (
      <EthJsonRpcContext.Consumer>
        {({ url, changeUrl }) => {
           const selectedNetwork = networks.find(network => network.url === url);

           return (
             <div>
               <Button color="secondary" onClick={this.handleClickListItem}>
                 <NetworkIcon className={classes.networkIcon}/>{ selectedNetwork.name }
               </Button>

               <Menu
                 id="network-selector"
                 anchorEl={anchorEl}
                 open={Boolean(anchorEl)}
                 onClose={this.handleClose}
               >
                 {
                   networks.map(network => (
                     <MenuItem key={network.url} selected={network.url === selectedNetwork.url}>
                       <EthJsonRpcProvider url={network.url}>
                         <div onClick={() => {
                             this.handleMenuItemClick();
                             changeUrl(network.url);
                         }}>
                           <Typography>{network.name}</Typography>
                           <EthRpc method="net.version">
                             {networkId => (<Typography>{networkId}</Typography>)}
                           </EthRpc>
                         </div>
                       </EthJsonRpcProvider>
                     </MenuItem>
                   ))
                 }
               </Menu>
             </div>
           );
        }}
      </EthJsonRpcContext.Consumer>
    );
  }
}

export default withStyles(styles, { name: 'EmeraldNetworkSelector' })(NetworkSelector);
