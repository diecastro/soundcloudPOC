import React from 'react';
import TextField from '@material-ui/core/TextField/TextField';

export default function renderTextField(props) {
  const {input, label, helperText, fullWidth, disabled, meta: {touched, error}, ...custom} = props;
  const errorText = touched && error ? error : null;
  return (
    <>
      <p className='inputLabel'>{label}</p>
      <TextField
        className='addBorder'
        margin='normal'
        variant='outlined'
        error={Boolean(touched && error)}
        fullWidth={fullWidth}
        helperText={errorText ? errorText : helperText}
        id={input.name}
        value={input.value ? input.value : ''}
        disabled={disabled}
        {...input}
        {...custom}
      />
    </>
  );
}
