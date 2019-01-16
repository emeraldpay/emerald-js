import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import blockies from './blockies';

const getStyles = (theme) => ({
  clickable: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
});

const noop = () => {};

export class IdentityIcon extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    size: PropTypes.number,
    onClick: PropTypes.func,
    classes: PropTypes.object.isRequired,
  }

  static defaultProps = {
    size: 40,
    onClick: noop,
  }

  render() {
    const {
      id, size, onClick, classes,
    } = this.props;

    const seed = id.toLowerCase();
    const icon = blockies.create({ seed }).toDataURL();

    const mainStyle = {
      height: `100%`,
      background: `url(${icon})`,
      borderRadius: '50%',
      position: 'relative',
    };

    const identiconProps = {
      onClick,
      className: onClick === noop ? '' : classes.clickable,
    };

    return (
      <div style={mainStyle} {...identiconProps} />
    );
  }
}

export default withStyles(getStyles)(IdentityIcon);
