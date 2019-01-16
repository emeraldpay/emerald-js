import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Typography from '@material-ui/core/Typography';
import Account from '../Account';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    cursor: 'pointer',
  },
});


class SimpleListMenu extends React.Component {
  button = null;

  constructor(props) {
    super(props);
    const selectedIndex = props.accounts.indexOf(props.account);
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
    this.props.onChange(this.props.accounts[index]);
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  renderAccounts() {
    return this.props.accounts.map((account, index) => (
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
    if (!this.props.selectedAccount) {
      return (
        <Typography onClick={this.handleClickListItem}>
          Select Account
        </Typography>
      )
    }
    return (
      <Account
        identity
        onClick={this.handleClickListItem}
        address={this.props.accounts[this.state.selectedIndex]}
        addressWidth="200px"
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
          id="lock-menu"
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

SimpleListMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleListMenu);
