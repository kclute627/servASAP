import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import TextField from "@material-ui/core/TextField";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";


const court = [
    {
      name: "Cook County Civil Court",
    },
    {
      name: "Blank",
      lic: "",
    },
  ];

const CaseInfo = ({formData, setFormData, handleChange}) => {
  return (
    <div>
      <h3>Case Information </h3>
      <div className='form-group-span'></div>
      <div className='form-item'>
        <TextField
          id='outlined-basic'
          label='Case Number'
          variant='outlined'
          style={{ width: "100%" }}
          name='caseNumber'
          onChange={handleChange}
        />
      </div>
      <div className='form-item'>
        <TextField
          id='outlined-basic'
          label='Plantiff'
          variant='outlined'
          style={{ width: "100%" }}
          name='plantiff'
          onChange={handleChange}
        />
      </div>

      <div className='form-item'>
        <TextField
          id='outlined-basic'
          label='Defendant'
          autoComplete='new-password'
          variant='outlined'
          style={{ width: "100%" }}
          name='defendant'
          onChange={handleChange}
        />
      </div>
      <div className='form-item'>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            format='MM/dd/yyyy'
            autoOk
            variant='inline'
            label='Court Date'
            autoComplete='new-password'
            value={formData.courtDate}
            onChange={(newValue) => {
              setFormData({ ...formData, courtDate: newValue });
            }}
          />
        </MuiPickersUtilsProvider>
      </div>

      <div className='form-item'>
        {/*todo --- try to find an autocomplete solution where courts are loaded from the user / company profile  */}

        <TextField
          id='outlined-basic'
          label='Court Name'
          variant='outlined'
          autoComplete='new-password'
          
          select
          style={{ width: "100%" }}
          SelectProps={{
            native: true,
          }}
          name='courtName'
          onChange={handleChange}
        >
          {court.map((option) => (
            <option key={option.name} value={option.name}>
              {option.name}
            </option>
          ))}
        </TextField>
      </div>
    </div>
  );
};

export default CaseInfo;
