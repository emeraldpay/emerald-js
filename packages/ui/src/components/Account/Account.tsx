import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Pen3 as EditIcon } from '@emeraldplatform/ui-icons';
import Address from '../Address';
import IdentityIcon from '../IdentityIcon';
import { CSSProperties } from '@material-ui/core/styles/withStyles';

const getStyles = (theme?: any) => ({
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
  } as CSSProperties,
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

export interface Props {
  addressProps?: any,
  address: string,
  name?: string,
  addressWidth?: string,
  classes: any,
  identity?: boolean,
  identityProps?: any,
  editable?: boolean,
  onClick?: any,
  onEditClick?: any,
};

export class Account extends React.Component<Props> {
  static defaultProps = {
    editable: false,
    addressWidth: 'auto',
    name: null,
    onEditClick: noop,
    onClick: noop,
  };

  constructor(props) {
    super(props);
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
