import React, { useState, useEffect } from "react";
import "date-fns";
import TextField from "@material-ui/core/TextField";

import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import InvoiceSection from "./InvoiceSection";
import Autocomplete from "@material-ui/lab/Autocomplete";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import PlacesAutocomplete from "./PlacesAutocomplete";

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
  const [server, setServers] = useState("Blank");
  const [courts, setCourt] = useState("Blank");
  const [courtBtn, setCourtBtn] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [dueDate, setDueDate] = useState(new Date());
  const [rush, setRush] = useState(false);
  const [address, setAddress] = useState({
    city: "",
    query: "",
    zip: "",
    state: "",
    suite: "",
    lat: "",
    long: "",
  });

  useEffect(() => {}, []);

  const handleChange = (event) => {
    if (event.target.name === "Servers") return setServers(event.target.value);

    if (event.target.name === "court") return setCourt(event.target.value);
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
              label='Company Name'
              variant='outlined'
              style={{ width: "100%" }}
            />
          </div>
          {/* <div className='form-item'>
            <TextField
              id='outlined-basic'
              label='First Name'
              variant='outlined'
              style={{ width: "55%", marginRight: "2rem" }}
            />
            <TextField
              id='outlined-basic'
              label='Last Name'
              variant='outlined'
              style={{ width: "55%" }}
            />
          </div>

          <div className='form-item'>
            <TextField
              style={{ width: "55%", marginRight: "2rem" }}
              id='outlined-basic'
              label='Phone'
              variant='outlined'
            />
            <TextField
              id='outlined-basic'
              label='Email'
              variant='outlined'
              style={{ width: "55%" }}
            />
          </div> */}

          <div className='form-item'>
            <TextField
              id='outlined-basic'
              label='Client Ref Number'
              variant='outlined'
              style={{ width: "100%" }}
            />
          </div>

          <h3>Process Server </h3>
          <div className='form-group-span'></div>
          <div className='form-item'>
            <TextField
              id='outlined-basic'
              label='Process Server'
              variant='outlined'
              value={server}
              select
              onChange={handleChange}
              style={{ width: "100%" }}
              name='Servers'
              SelectProps={{
                native: true,
              }}
            >
              {servers.map((option) => (
                <option key={option.name} value={option.name}>
                  {option.name}
                </option>
              ))}
            </TextField>
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
              />
            </div>
            <div className='form-item'>
              <TextField
                id='outlined-basic'
                label='Plantiff'
                variant='outlined'
                style={{ width: "100%" }}
              />
            </div>

            <div className='form-item'>
              <TextField
                id='outlined-basic'
                label='Defendant'
                autoComplete="new-password"
                variant='outlined'
                style={{ width: "100%" }}
              />
            </div>
            <div className='form-item'>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  format='MM/dd/yyyy'
                  autoOk
                  variant='inline'
                  label='Court Date'
                  autoComplete="new-password"
                  value={selectedDate}
                  onChange={(newValue) => {
                    setSelectedDate(newValue);
                  }}
                />
              </MuiPickersUtilsProvider>
            </div>

            <div className='form-item'>
              {/* try to find an autocomplete solution  */}

              <TextField
                id='outlined-basic'
                label='Court Name'
                variant='outlined'
                autoComplete="new-password"
                name='court'
                value={courts}
                select
                onChange={handleChange}
                style={{ width: "100%" }}
                SelectProps={{
                  native: true,
                }}
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
                  checked={rush}
                  onChange={() => setRush(!rush)}
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
                value={dueDate}
                style={{ width: "35%" }}
                onChange={(newValue) => {
                  setDueDate(newValue);
                }}
              />
            </MuiPickersUtilsProvider>
          </div>
          <div className='form-item'>
            <textarea
              name=''
              id=''
              placeholder='Process Server Instructions'
              className='form-textarea'
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
            autoComplete="new-password"
            style={{ width: "100%" }}
          />
        </div>
        <h3> Service Address </h3>
        <div className='form-group-span'></div>
        <div className='form-item'>
          <PlacesAutocomplete />
        </div>
        
      </form>
      <InvoiceSection />
    </>
  );
};

export default AddJobForm;
