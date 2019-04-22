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
  let props: any = {};

  if (multiline) {
    props = { rows, rowsMax, multiline };
  }

  return props;
};

interface Props {
  classes?: any;
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
  type?: string;
  min?: number | string;
  max?: number | string;
}

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
        type={this.props.type}
        value={this.props.value}
        fullWidth
        margin="normal"
        rows={this.props.rows}
        rowsMax={this.props.rowsMax}
        disabled={this.props.disabled}
        placeholder={this.props.placeholder}
        onChange={this.props.onChange}
        inputProps={{
          min: this.props.min,
          max: this.props.max,
        }}
        {...inputProps}
        {...errorProps}
        {...multilineProps}
      />
    );
  }
}

export default Input;
