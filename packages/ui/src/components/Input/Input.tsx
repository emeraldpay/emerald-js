import * as React from 'react';
import requiredIf from 'react-required-if';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

const getErrorProps = ({ errorText }) => {
  const propsToAdd: any = {};

  if (errorText) {
    propsToAdd.helperText = errorText;
    propsToAdd.error = true;
  }

  return propsToAdd;
};

const getAdornments = ({ rightIcon, leftIcon }) => {
  const adornments: any = {};

  if (leftIcon) {
    adornments.startAdornment = (<InputAdornment position="start"> { leftIcon } </InputAdornment>);
  }

  if (rightIcon) {
    adornments.endAdornment = (<InputAdornment position="end">{ rightIcon }</InputAdornment>);
  }

  return adornments;
};

const getInputProps = props => ({
  InputProps: { ...getAdornments(props) },
});

const getMultilineProps = ({ multiline, rows, rowsMax }) => {
  let props: any = { multiline };

  if (multiline) {
    props = { rows, rowsMax };
  }

  return props;
};

interface Props {
  classes: any;
  value?: string | number;
  multiline?: boolean;
  rowsMax?: number;
  rows?: number;
  disabled?: boolean;
  rightIcon?: any;
  leftIcon?: any;
  placeholder?: string;
  onChange?: any;
  errorText?:any;
};

export class Input extends React.Component<Props> {

  static defaultProps = {
    value: '',
    multiline: false,
    rowsMax: null,
    rows: null,
    disabled: false,
    rightIcon: null,
    leftIcon: null,
    placeholder: '',
    onChange: () => {},
  };

  render() {
    const multilineProps = getMultilineProps(this.props as { multiline: any, rows: any, rowsMax: any });
    const errorProps = getErrorProps(this.props as {errorText: any});
    const inputProps = getInputProps(this.props);

    return (
      <TextField
        value={this.props.value}
        fullWidth
        rows={this.props.rows}
        rowsMax={this.props.rowsMax}
        disabled={this.props.disabled}
        placeholder={this.props.placeholder}
        onChange={this.props.onChange}
        {...inputProps}
        {...errorProps}
        {...multilineProps}
      />
    );
  }
}

export default Input;
