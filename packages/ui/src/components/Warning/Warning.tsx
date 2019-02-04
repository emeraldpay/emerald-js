import * as React from 'react';
import injectSheet from 'react-jss';
import styles from './styles';

export const WarningHeader = injectSheet(styles)(props => (
  <div className={props.classes.header}>
    { props.children }
  </div>));

// WarningHeader.propTypes = {
//   children: PropTypes.node,
// };

export const WarningText = injectSheet(styles)(props => (
  <div className={props.classes.text}>
    { props.children }
  </div>
));

// WarningText.propTypes = {
//   children: PropTypes.node,
// };

export const Warning = injectSheet(styles)((props) => {
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

// Warning.propTypes = {
//   children: PropTypes.node,
//   fullWidth: PropTypes.bool,
// };

export default Warning;
