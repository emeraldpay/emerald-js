import * as React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './styles';

interface Props {
  classes?: any;
  children?: any;
}

export const WarningHeader = withStyles(styles)((props: Props) => (
  <div className={props.classes.header}>
    { props.children }
  </div>));

export const WarningText = withStyles(styles)((props: Props) => (
  <div className={props.classes.text}>
    { props.children }
  </div>
));

interface WarningProps extends Props {
  fullWidth?: any;
}

export const Warning = withStyles(styles)((props: WarningProps) => {
  const { fullWidth, classes } = props;
  const style:{width?: string, maxWidth?: string} = {};
  if (fullWidth) {
    style.width = '100%';
    style.maxWidth = 'inherit';
  }

  return (
    <div className={classes.container} style={style}>
      { props.children }
    </div>);
});

export default Warning;
