import React from 'react';
import requiredIf from 'react-required-if';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

const getErrorProps = ({ errorText }) => {
  const propsToAdd = {};

  if (errorText) {
    propsToAdd.helperText = errorText;
    propsToAdd.error = true;
  }

  return propsToAdd;
};

const getAdornments = ({ rightIcon, leftIcon }) => {
  const adornments = {};

  if (leftIcon) {
    adornments.startAdornment = (<InputAdornment> { leftIcon } </InputAdornment>);
  }

  if (rightIcon) {
    adornments.endAdornment = (<InputAdornment>{ rightIcon }</InputAdornment>);
  }

  return adornments;
};

const getInputProps = props => ({
  InputProps: { ...getAdornments(props) },
});

const getMultilineProps = ({ multiline, rows, rowsMax }) => {
  let props = { multiline };

  if (multiline) {
    props = { rows, rowsMax };
  }

  return props;
};

export class Input extends React.Component {
  static propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    multiline: PropTypes.bool,
    rowsMax: requiredIf(PropTypes.number, props => props.multiline),
    rows: requiredIf(PropTypes.number, props => props.multiline),
    disabled: PropTypes.bool,
    rightIcon: PropTypes.element,
    leftIcon: PropTypes.element,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
  };

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
    const multilineProps = getMultilineProps(this.props);
    const errorProps = getErrorProps(this.props);
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
