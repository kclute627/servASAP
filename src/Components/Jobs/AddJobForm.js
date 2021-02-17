import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_JOB_FORM_CASEDEF,
  ADD_JOB_FORM_CASENUMBER,
  ADD_JOB_FORM_CASEPLANTIFF,
  ADD_JOB_FORM_CLIENTNAME,
  ADD_JOB_FORM_CLIENTREF,
  ADD_JOB_FORM_COURTDATE,
  ADD_JOB_FORM_COURTNAME,
  ADD_JOB_FORM_DUEDATE,
  ADD_JOB_FORM_INSTRUCTIONS,
  ADD_JOB_FORM_PERSONSERVED,
  ADD_JOB_FORM_RUSH,
  ADD_JOB_FORM_SERVER,
} from "../../constants/addJobConstants";
import "date-fns";
import TextField from "@material-ui/core/TextField";
import FileDropForm from "./FileDropForm";

import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import InvoiceSection from "./InvoiceSection";
import { Autocomplete } from "@material-ui/lab";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import PlacesAutocomplete from "./PlacesAutocomplete";
import { setFormData } from "../../Actions/addjobActions";

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
const court = [
  {
    name: "Cook County Civil Court",
  },
  {
    name: "Blank",
    lic: "",
  },
];

const AddJobForm = (props) => {
  
  const dispatch = useDispatch();
  let formData = useSelector((state) => state.setFormData)



 useEffect(() => {
  ;
  
 }, [])

  const handleChange = (event) => {
    dispatch(setFormData(event.target.value, event.target.name));
  };

  return (
    <>
      <form className='form-group'>
        <div className='form-group-1'>
          <h3>Client Information </h3>
          <div className='form-group-span'></div>
          <div className='form-item'>
            <TextField
              id='outlined-basic'
              autoComplete='new-password'
              label='Company Name'
              name={ADD_JOB_FORM_CLIENTNAME}  
              onChange={handleChange}
              variant='outlined'
              style={{ width: "100%" }}
            />
          </div>

          <div className='form-item'>
            <TextField
              id='outlined-basic'
              label='Client Ref Number'
              variant='outlined'
              style={{ width: "100%" }}
              name={ADD_JOB_FORM_CLIENTREF}
              onChange={handleChange}
            />
          </div>

          <h3>Process Server </h3>
          <div className='form-group-span'></div>
          <div className='form-item'>
            <Autocomplete
              freeSolo
              id='outlined-basic'
              label='Process Server'
              autoComplete='new-password'
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
                  name={ADD_JOB_FORM_SERVER}
                  onChange={handleChange}
                  onSelect={handleChange}
                />
              )}
            />
          </div>

          <div>
            <h3>Case Information </h3>
            <div className='form-group-span'></div>
            <div className='form-item'>
              <TextField
                id='outlined-basic'
                label='Case Number'
                variant='outlined'
                style={{ width: "100%" }}
                name={ADD_JOB_FORM_CASENUMBER}
                onChange={handleChange}
              />
            </div>
            <div className='form-item'>
              <TextField
                id='outlined-basic'
                label='Plantiff'
                variant='outlined'
                style={{ width: "100%" }}
                name={ADD_JOB_FORM_CASEPLANTIFF}
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
                name={ADD_JOB_FORM_CASEDEF}
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
                    dispatch(setFormData(newValue, ADD_JOB_FORM_COURTDATE));
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
                name='court'
                select
                style={{ width: "100%" }}
                SelectProps={{
                  native: true,
                }}
                name={ADD_JOB_FORM_COURTNAME}
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
          <h3>Server Instructions </h3>
          <div className='form-group-span'></div>

          <div className='form-item'>
            <FormControlLabel
              control={
                <Switch
                  checked={formData.rush}
                  onChange={() =>
                    dispatch(setFormData(!formData.rush, ADD_JOB_FORM_RUSH))
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
                  dispatch(setFormData(newValue, ADD_JOB_FORM_DUEDATE));
                }}
              />
            </MuiPickersUtilsProvider>
          </div>
          <div className='form-item'>
            {/* todo - Put Chips in Like I did for the description of the documents being served */}
            <textarea
              name=''
              id=''
              placeholder='Process Server Instructions'
              className='form-textarea'
              value={formData.serverInstructions}
              name={ADD_JOB_FORM_INSTRUCTIONS}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
        <h3> Person / Company Being Served </h3>
        <div className='form-group-span'></div>
        <div className='form-item'>
          <TextField
            id='outlined-basic'
            label='Name'
            variant='outlined'
            autoComplete='new-password'
            style={{ width: "100%" }}
            name={ADD_JOB_FORM_PERSONSERVED}
            onChange={handleChange}
          />
        </div>
        <h3> Service Address </h3>
        <div className='form-group-span'></div>
        <div className='form-item'>
          <PlacesAutocomplete 
        
          />
        </div>

        <FileDropForm />
      </form>
      <InvoiceSection />
    </>
  );
};

export default AddJobForm;
