import React, { useState, useEffect } from "react";
import "date-fns";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";
import DatePicker from "@material-ui/lab/DatePicker";

import DateFnsUtils from "@date-io/date-fns";  
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  
} from "@material-ui/pickers";

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (event) => {
    if (event.target.name === "Servers") return setServers(event.target.value);

    if (event.target.name === "court") return setCourt(event.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
      <form className="form-group">
        <div className="form-group-1">
          <h3>Client Information </h3>
          <div className="form-group-span"></div>
          <div className="form-item">
            <TextField
              id="outlined-basic"
              label="Company Name"
              variant="outlined"
              style={{ width: "100%" }}
            />
          </div>
          <div className="form-item">
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              style={{ width: "55%", marginRight: "2rem" }}
            />
            <TextField
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              style={{ width: "55%" }}
            />
          </div>

          <div className="form-item">
            <TextField
              style={{ width: "55%", marginRight: "2rem" }}
              id="outlined-basic"
              label="Phone"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              style={{ width: "55%" }}
            />
          </div>

          <div className="form-item">
            <TextField
              id="outlined-basic"
              label="Client Ref Number"
              variant="outlined"
              style={{ width: "100%" }}
            />
          </div>

          <h3>Process Server </h3>
          <div className="form-group-span"></div>
          <div className="form-item">
            <TextField
              id="outlined-basic"
              label="Process Server"
              variant="outlined"
              value={server}
              select
              onChange={handleChange}
              style={{ width: "100%" }}
              name="Servers"
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
            <div className="form-group-span"></div>
            <div className="form-item">
              <TextField
                id="outlined-basic"
                label="Case Number"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </div>
            <div className="form-item">
              <TextField
                id="outlined-basic"
                label="Plantiff"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </div>

            <div className="form-item">
              <TextField
                id="outlined-basic"
                label="Defendant"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </div>
            <div className="form-item">
              {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Date picker inline"
                  value={selectedDate}
                  onChange={handleDateChange}
                />
              </MuiPickersUtilsProvider> */}
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Basic example"
                  value={value}
                  onChange={(newValue) => {
                    handleDateChange(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField {...params} variant="standard" />
                  )}
                />
              </LocalizationProvider>
            </div>

            <div className="form-item">
              {/* try to find an autocomplete solution  */}

              <TextField
                id="outlined-basic"
                label="Court Name"
                variant="outlined"
                name="court"
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
          <div className="form-group-span"></div>
          <div className="form-item">
            <TextField
              id="outlined-basic"
              label="Company Name"
              variant="outlined"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default AddJobForm;
