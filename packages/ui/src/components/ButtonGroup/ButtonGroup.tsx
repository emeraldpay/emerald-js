// @flow
import * as React from 'react';
import injectSheet from 'react-jss';
import styles from './styles';

interface Props {
  children?: Array<any>;
  classes: any;
  style?: any;
};

export const ButtonGroup = ({ classes, children, style }: Props) => {
  if (!children) {
    return null;
  }
  let key = 0;
  return (
    <div className={classes.container} style={style}>
      { children.map((btn) => {
          const item = (
            <div key={key} className={(key === 0) ? classes.firstItem : classes.item}>
              { btn }
            </div>);
          key += 1;
          return item;
      })}
    </div>
  );
};


export default injectSheet(styles)(ButtonGroup);
