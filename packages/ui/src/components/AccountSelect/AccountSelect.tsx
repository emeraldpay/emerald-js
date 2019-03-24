import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Account from '../Account';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    cursor: 'pointer',
  },
});

interface Props {
  onChange?: any;
  accounts?: Array<string>;
  classes: any;
  selectedAccount?: any;
}

interface State {
  selectedIndex?: any;
  anchorEl?: any;
}

export class AccountSelect extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    const accounts = props.accounts || [];
    const selectedIndex = accounts.indexOf(props.selectedAccount);
    this.state = {
      anchorEl: null,
      selectedIndex: (selectedIndex >= 0) ? selectedIndex : 0,
    };
    this.renderAccounts = this.renderAccounts.bind(this);
  }

  handleClickListItem = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuItemClick = (event, index) => {
    this.setState({ selectedIndex: index, anchorEl: null });
    if (this.props.onChange && this.props.accounts) {
      this.props.onChange(this.props.accounts[index]);
    }
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  renderAccounts() {
    const accounts = this.props.accounts || [];
    return accounts.map((account, index) => (
      <MenuItem
        key={account}
        selected={index === this.state.selectedIndex}
      >
        <Account
          identity
          hideCopy
          address={account}
          onClick={event => this.handleMenuItemClick(event, index)}
        />
      </MenuItem>
    ))
  }

  renderSelected() {
    const accounts = this.props.accounts || [];
    if (accounts.length == 0) {
      return (<div>No accounts provided</div>);
    }
    const selected = accounts[this.state.selectedIndex];
    if (!selected) {
      return null;
    }
    return (
      <Account
        identity
        onClick={this.handleClickListItem}
        address={selected}
        addressWidth="200px"
        addressProps={{
          shortened: false,
        }}
      />
    )
  }

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;

    return (
      <div className={classes.root}>
        {this.renderSelected()}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          {this.renderAccounts()}
        </Menu>
      </div>
    );
  }
}

export default withStyles(styles)(AccountSelect);
