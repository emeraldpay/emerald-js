import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Pen3 as EditIcon } from '../../icons';
import Address from '../Address';
import IdentityIcon from '../IdentityIcon';

const getStyles = (theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
  },
  nameEditIcon: {
    width: '13px',
    height: '13px',
    cursor: 'pointer',
  },
  nameTypography: {
    lineHeight: '22px',
    fontSize: '14px',
  },
  accountNameContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  editNameIconContainer: {
    marginLeft: '5px',
  },
  accountContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  identityIcon: {
    marginRight: '10px',
  },
  identityIconRegular: {
    height: '48px',
    width: '48px',
  },
  identityIconShort: {
    height: '24px',
    width: '24px',
  },
});

const noop = () => {};

export class Account extends React.Component {
  static propTypes = {
    addressProps: PropTypes.object,
    address: PropTypes.string.isRequired,
    name: PropTypes.string,
    addressWidth: PropTypes.string,
    classes: PropTypes.object.isRequired,
    identity: PropTypes.bool,
    identityProps: PropTypes.object,
    editable: PropTypes.bool,
    onClick: PropTypes.function,
    onEditClick: PropTypes.func,
  };

  static defaultProps = {
    editable: false,
    width: 'auto',
    name: null,
    onEditClick: noop,
    onClick: noop,
  };

  constructor() {
    super();
    this.getIdentityIcon = this.getIdentityIcon.bind(this);
    this.getNameField = this.getNameField.bind(this);
    this.getNameEditIcon = this.getNameEditIcon.bind(this);
  }

  getIdentityIcon() {
    const { identity, name, classes, address } = this.props;

    if (!identity) { return null; }

    let className = classes.identityIcon;

    if (name === null) {
      className += ` ${classes.identityIconShort}`;
    } else {
      className += ` ${classes.identityIconRegular}`;
    }

    return (
      <div className={className}>
        <IdentityIcon id={address} />
      </div>
    );
  }

  getNameEditIcon() {
    const { editable, classes, onEditClick } = this.props;

    if (editable === false) { return null; }

    return (
      <div className={classes.editNameIconContainer} onClick={onEditClick}>
        <EditIcon className={classes.nameEditIcon} />
      </div>
    );
  }

  getNameField() {
    const { name, classes } = this.props;

    if (name === null) { return null; }

    return (
      <div className={classes.accountNameContainer}>
        <Typography className={classes.nameTypography}>{ name }</Typography>
        {this.getNameEditIcon()}
      </div>
    );
  }

  render() {
    const addressProps = {
      shortened: true,
      hideCopy: true,
      id: this.props.address,
      ...this.props.addressProps,
    };

    const { addressWidth, classes } = this.props;

    return (
      <div onClick={this.props.onClick} className={classes.root}>
        {this.getIdentityIcon()}

        <div className={classes.accountContainer} style={{ width: addressWidth }}>
          {this.getNameField()}
          <Address {...addressProps} />
        </div>
      </div>
    );
  }
}

export default withStyles(getStyles)(Account);
