import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme? : any) => ({
  toggledIcon: {
    cursor: 'pointer',
    marginLeft: '4px',
  },
});

interface Props {
  onClick: any;
  icon: any;
  toggledIcon: any;
  toggleDuration: number;
  classes: any;
};

interface State {
  toggled: boolean;
}

class ToggledIconButton extends React.Component<Props, State> {

  static defaultProps = {
    toggleDuration: 1000,
  };

  constructor(props) {
    super(props);
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
