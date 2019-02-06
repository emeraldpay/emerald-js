import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  title: {
    color: theme.palette.primary
  },
  flex: {
    flexGrow: 1
  },
  item: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: `${theme.spacing.unit * 3}px`,
    '&:last-child': {
      marginRight: '0px'
    }
  },
});

interface Props {
  classes: any;
  title?: any;
  subtitle?: any;
  children?: any;
};

class EmeraldAppBar extends React.Component<Props> {
  render() {
    const { classes, title, subtitle } = this.props;
    const children = (this.props.children && this.props.children.length && this.props.children.length > 0) ? this.props.children : [this.props.children]

    return (
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography color="primary">
            {title}
          </Typography>
          &nbsp;
          <Typography className={classes.flex}>
            {subtitle}
          </Typography>
          {children.map((item, i) => <div key={i} className={classes.item}>{item}</div>)}
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(EmeraldAppBar);
