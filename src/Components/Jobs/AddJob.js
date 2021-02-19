import React, {useEffect } from "react";
import AddJobForm from "./AddJobForm";

const AddJob = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="addjob">
      <div className="addjob-top">
        <h1>ADD A JOB</h1>
      </div>

      <AddJobForm />
    </div>
  );
};

export default AddJob;
