import React from 'react';
import PropTypes from 'prop-types';
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

export class Page extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
    classes: PropTypes.object.isRequired,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
    rightIcon: PropTypes.element,
    leftIcon: PropTypes.element,
  };

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
          <Typography variant="title" color="inherit" className={classes.typography}>{title}</Typography>
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
