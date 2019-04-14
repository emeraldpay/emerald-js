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
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {},
  typography: {},
  toolbar: {
    background: 'transparent',
    height: theme.spacing.unit * 10,
    flex: 1,
    justifyContent: 'space-between',
  },
  childWrapper: {
    padding: theme.spacing.unit * 4,
  },
});

const getIconWithButton = (icon) => {
  if (!icon) { return <div />; }
  return (
    <IconButton>
      {icon}
    </IconButton>
  );
};

interface Props {
  title: string;
  className?: string;
  classes: any;
  rightIcon?: any;
  leftIcon?: any;
};

export class Page extends React.Component<Props> {
  static defaultProps = {
    rightIcon: null,
    leftIcon: null,
  };

  render() {
    const {
      title, leftIcon, rightIcon, classes,
    } = this.props;
    return (
      <Paper className={classes.root}>
        <Toolbar className={classes.toolbar}>
          {getIconWithButton(leftIcon)}
          <Typography variant="h6" color="inherit" className={classes.typography}>{title}</Typography>
          {getIconWithButton(rightIcon)}
        </Toolbar>

        <Divider />

        <div className={classes.childWrapper}>
          {this.props.children}
        </div>
      </Paper>
    );
  }
}

export default withStyles(styles, { name: 'EmeraldPage' })(Page);
