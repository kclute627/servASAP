import React from "react";
import TextField from "@material-ui/core/TextField";
import { Autocomplete } from "@material-ui/lab";
import DateFnsUtils from "@date-io/date-fns";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import Switch from "@material-ui/core/Switch";

const ServerInfo = ({ setFormData, formData, handleChange }) => {
  const servers = [
    {
      name: "Blank",
      lic: "",
    },

    {
      name: "Kyle Clutter",
      lic: "115-009722",
    },
  ];

  return (
    <>
      <h3>Process Server </h3>
      <div className='form-group-span'></div>
      <div className='form-item'>
        <Autocomplete
          freeSolo
          id='outlined-basic'
          label='Process Server'
          // autoComplete='new-password'
          variant='outlined'
          options={servers.map((option) => option.name)}
          style={{ width: "100%" }}
          name='Servers'
          renderInput={(params) => (
            <TextField
              {...params}
              label='Process Server'
              margin='normal'
              variant='outlined'
              name='server'
              onChange={handleChange}
              onSelect={handleChange}
            />
          )}
        />
      </div>

      <h3>Server Instructions </h3>
      <div className='form-group-span'></div>

      <div className='form-item'>
        <FormControlLabel
          control={
            <Switch
              checked={formData.rush}
              onChange={() =>
                setFormData({ ...formData, rush: !formData.rush })
              }
              name='rush'
              color='primary'
            />
          }
          label='RUSH'
        />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            format='MM/dd/yyyy'
            autoOk
            variant='inline'
            label='Due Date'
            value={formData.dueDate}
            style={{ width: "35%" }}
            onChange={(newValue) => {
              setFormData({ ...formData, dueDate: newValue });
            }}
          />
        </MuiPickersUtilsProvider>
      </div>
      <div className='form-item'>
        {/* todo - Put Chips in Like I did for the description of the documents being served */}
        <textarea
          
         
          placeholder='Process Server Instructions'
          className='form-textarea'
          value={formData.serverInstructions}
          name='serverInstructions'
          onChange={handleChange}
        ></textarea>
      </div>
    </>
  );
};

export default ServerInfo;
