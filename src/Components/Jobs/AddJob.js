import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

const AddJob = () => {
  return (
    <div className="addjob">
      <div className="addjob-top">
        <h1>ADD A JOB</h1>
      </div>
      <div className="form-group">
        <h3>Client Information</h3>
        <form>
          <div className="form-item">
            
            <TextField
              id="outlined-basic"
              label="Company Name"
              variant="outlined"
              style={{width: '85%'}}
              

            />
          </div>
          <div className="form-item">
            
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              style={{width: '85%'}}
            />
          </div>
          <div className="form-item">
            
            <TextField
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              style={{width: '85%'}}
            />
          </div>
          <div className="form-item">
            
            <TextField
            style={{width: '85%'}}
              id="outlined-basic"
              label="Phone"
              variant="outlined"
            />
          </div>
          <div className="form-item">
            
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              style={{width: '85%'}}
            />
          </div>
          <div className="form-item">
            
            <TextField
              id="outlined-basic"
              label="Client Ref Number"
              variant="outlined"
              style={{width: '85%'}}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
