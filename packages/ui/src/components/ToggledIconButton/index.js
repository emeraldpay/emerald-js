import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  toggledIcon: {
    cursor: 'pointer',
    marginLeft: '4px',
  },
});

class ToggledIconButton extends React.Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    icon: PropTypes.node.isRequired,
    toggledIcon: PropTypes.node.isRequired,
    toggleDuration: PropTypes.number,
    classes: PropTypes.object.isRequired,
  };

  static defaultProps = {
    toggleDuration: 1000,
  };

  constructor() {
    super();
    this.state = { toggled: false };
    this.toggle = this.toggle.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  toggle() {
    this.setState({ toggled: !this.state.toggled });
  }

  handleClick() {
    this.props.onClick();
    this.setState({ toggled: true });

    setTimeout(this.toggle, this.props.toggleDuration);
  }

  render() {
    const { classes, toggledIcon, icon } = this.props;
    const { toggled } = this.state;

    return (
      <div className={classes.toggledIcon} onClick={this.handleClick}>
        { this.state.toggled ? toggledIcon : icon }
      </div>
    );
  }
}

export default withStyles(styles)(ToggledIconButton);
