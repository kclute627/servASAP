import React, { useState, useEffect } from "react";
import AddJobForm from "./AddJobForm";

const AddJob = () => {
  
  useEffect(()=> {
    
    window.scrollTo(0, 0)
  }, [])
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
