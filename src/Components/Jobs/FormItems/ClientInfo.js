import React from "react";
import TextField from "@material-ui/core/TextField";

const ClientInfo = ({setFormData, formData, handleChange}) => {
  return (
    <>
      <h3>Client Information </h3>
      <div className='form-group-span'></div>
      <div className='form-item'>
        <TextField
          id='outlined-basic'
          autoComplete='new-password'
          label='Company Name'
          name='clientName'  
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
          name='clientRef'
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default ClientInfo;
