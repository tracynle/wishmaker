import React from 'react';
import TextField from '@material-ui/core/TextField';

function DatePickers() {

  return (
    <form noValidate>
      <TextField
        id="date"
        label="Birthday"
        type="date"
        defaultValue="2017-05-24"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}

export default DatePickers;
