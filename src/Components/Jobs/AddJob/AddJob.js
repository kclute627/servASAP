import React, {useEffect } from "react";
import AddJobForm from "./AddJobForm"

const AddJob = ({history}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="addjob">
      <div className="addjob-top">
        <h1>ADD A JOB</h1>
      </div>

      <AddJobForm history={history} />
    </div>
  );
};

export default AddJob;
