import React from 'react';
import { TextField } from '@material-ui/core';
import { input } from 'reactstrap'
import { Controller } from 'react-hook-form';

export default (props) => {
  const { model = {}, errors = {} } = props;
  const fields = model.fields || model;
  const error = (props.name) ? errors[props.name] != null : false;
  const helperText = (errors && props.name) ? (errors[props.name] || {}).message : '';

  if (props.control) {
    return (
      <React.Fragment>
        <Controller as={TextField}
          fullWidth
          label={props.label}
          name={props.name}
          control={props.control}
          defaultValue={props.defaultValue || fields[props.name]}
          value={props.value}
          error={error}
          helperText={helperText}
          variant="outlined"
          size="small"

        />
      </React.Fragment>
    );
  } else {
    return (
      <TextField
        fullWidth
        label={props.label}
        name={props.name}
        defaultValue={props.defaultValue || model[props.name]}
        value={props.value}
        onChange={props.onChange}
        variant="outlined"
        size="small"
      />
    );
  }
}