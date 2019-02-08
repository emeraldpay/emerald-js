import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ToggledIconButton from '../ToggledIconButton';
import Typography from '@material-ui/core/Typography';

import { Copytoclipboard as CloneIcon, Check1 as CheckCircle } from '@emeraldplatform/ui-icons';

const copy = require('copy-to-clipboard');

export const getStyles = (theme? : any) => ({
  container: {
    height: '28px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  shortenedAddress: {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    width: '100%',
  },
  toggledIcon: {
    cursor: 'pointer',
  }
});

export interface Props {
  hideCopy?: boolean;
  onCopyClick?: any;
  id?: string;
  shortened?: boolean;
  classes: any;
  muiTheme?: any;
}

export class Address extends React.Component<Props> {

  static defaultProps = {
    hideCopy: false,
    shortened: false,
    showCheck: false,
    onCopyClick: () => {},
  };

  constructor(props) {
    super(props);
    this.onCopyClick = this.onCopyClick.bind(this);
  }

  onCopyClick() {
    copy(this.props.id);
    this.props.onCopyClick(this.props.id);
  }

  get id() {
    const idProp = this.props.id;
    return (idProp.startsWith('0x') ? idProp : `0x${idProp}`);
  }

  render() {
    const { classes, shortened, hideCopy } = this.props;

    const addressClassname = shortened ? classes.shortenedAddress : '';

    return (
      <div className={classes.container}>
        <Typography className={addressClassname}>{this.id}</Typography>
        {hideCopy ? null : <ToggledIconButton className={classes.toggledIcon} onClick={this.onCopyClick} icon={<CloneIcon color="secondary"/>} toggledIcon={<CheckCircle color="primary"/>} />}
      </div>
    );
  }
}

export default withStyles(getStyles)(Address);
