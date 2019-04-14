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
}

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
