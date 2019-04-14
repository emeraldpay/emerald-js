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
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Pen3 as EditIcon } from '@emeraldplatform/ui-icons';
import cx from 'classnames';
import { CSSProperties } from '@material-ui/core/styles/withStyles';

import Address from '../Address';
import IdentityIcon from '../IdentityIcon';

export const getStyles = (theme?: any) => ({
  root: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
  },
  clickable: {
    cursor: 'pointer',
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
  classes?: any,
  identity?: boolean,
  identityProps?: any,
  editable?: boolean,
  onClick?: any,
  onEditClick?: any,
}

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
    const { identity, classes, address } = this.props;

    if (!identity) { return null; }

    let className = classes.identityIcon;

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

    const { addressWidth, classes, onClick } = this.props;
    const isClickable = (typeof onClick == 'function' && onClick != noop);
    return (
      <div onClick={onClick} className={cx(classes.root, {[classes.clickable]: isClickable})}>
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
