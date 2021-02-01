import React, { useState } from "react";
import AddJobForm from "./AddJobForm";

const AddJob = () => {
  return (
    <div className="addjob">
      <div className="addjob-top">
        <h1>ADD A JOB</h1>
      </div>

      <form className="form-group">
        
          <AddJobForm />
       
      
      </form>
    </div>
  );
};

export default AddJob;
