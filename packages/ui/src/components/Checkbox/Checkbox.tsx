import * as React from 'react';
import {default as MCheckbox} from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export interface Props {
    label?: string;
    checked?: boolean;
    disabled?: boolean;
    onCheck?: (any, boolean) => void;
};

export interface State {
  checked?: boolean;
}

/**
 * For now this is a wrapper around Material-UI Checkbox
 */
export class Checkbox extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked,
    };
  }

    handleCheck = (event: any, isInputChecked: boolean) => {
      this.setState({
        checked: isInputChecked,
      });
      if (this.props.onCheck) {
        this.props.onCheck(event, isInputChecked);
      }
    };

    render() {
      const styles = {
        icon: {
          checked: {
            marginRight: '10px',
          },
          unchecked: {
            marginRight: '10px',
          },
        },
      };
      const { checked } = this.state;
      const { label, disabled } = this.props;
      const iconStyle = checked ? styles.icon.checked : styles.icon.unchecked;

      return (
        <FormControlLabel
          control={
            <MCheckbox
              checked={checked}
              disabled={disabled}
              // iconStyle={iconStyle}
              onChange={this.handleCheck}
            />}
          label={label}
        />
      );
    }
}


export default Checkbox;
