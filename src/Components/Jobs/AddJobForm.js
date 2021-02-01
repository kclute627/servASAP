import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from '@material-ui/core/Button'
import Autocomplete from '@material-ui/lab/Autocomplete';
// import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
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
  const [courtBtn, setCourtBtn] = useState(false)

  const handleChange = (event) => {
    if (event.target.name === "Servers") return setServers(event.target.value);

    if (event.target.name === "court") return setCourt(event.target.value);
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
              <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={court.map((option) => {  
                    
                    return option.name
                })}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Search input"
                    margin="normal"
                    variant="outlined"
                    onChange={handleChange}
                    value={courts}
                    InputProps={{ ...params.InputProps, type: "search" }}
                  />
                )}
              />
              <TextField
                id="outlined-basic"
                label="Court Name"
                variant="outlined"
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
        </div>
      </form>
    </>
  );
};

export default AddJobForm;
