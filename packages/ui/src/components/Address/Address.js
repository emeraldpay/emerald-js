import React from 'react';
import PropTypes from 'prop-types';
import copy from 'copy-to-clipboard';
import { withStyles } from '@material-ui/core/styles';
import ToggledIconButton from '../ToggledIconButton';
import Typography from '@material-ui/core/Typography';

import { Copytoclipboard as CloneIcon, Check1 as CheckCircle } from '../../icons';

export const getStyles = theme => ({
  container: {
    height: '28px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  shortenedAddress: {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    width: '100%',
  },
  toggledIcon: {
    cursor: 'pointer',
  }
});

export class Address extends React.Component {
  static propTypes = {
    hideCopy: PropTypes.bool,
    onCopyClick: PropTypes.func,
    id: PropTypes.string.isRequired,
    shortened: PropTypes.bool,
    classes: PropTypes.object.isRequired,
  };

  static defaultProps = {
    hideCopy: false,
    shortened: false,
    showCheck: false,
    onCopyClick: () => {},
  };

  constructor(props) {
    super(props);
    this.onCopyClick = this.onCopyClick.bind(this);
  }

  onCopyClick() {
    copy(this.props.id);
    this.props.onCopyClick(this.props.id);
  }

  get id() {
    const idProp = this.props.id;
    return (idProp.startsWith('0x') ? idProp : `0x${idProp}`);
  }

  render() {
    const { classes, shortened, hideCopy } = this.props;

    const addressClassname = shortened ? classes.shortenedAddress : '';

    return (
      <div className={classes.container}>
        <Typography className={addressClassname}>{this.id}</Typography>
        {hideCopy ? null : <ToggledIconButton className={classes.toggledIcon} onClick={this.onCopyClick} icon={<CloneIcon color="secondary"/>} toggledIcon={<CheckCircle color="primary"/>} />}
      </div>
    );
  }
}

export default withStyles(getStyles)(Address);
