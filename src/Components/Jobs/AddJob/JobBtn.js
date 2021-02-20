import React from "react";
import Button from "@material-ui/core/Button";
import { createJobs } from "../../../graphql/mutations";
import { API, graphqlOperation } from "aws-amplify";

const JobBtn = ({formData, setFormData, initialState}) => {

  const saveJobHandler = async() => {
    try {
      const results = await API.graphql(graphqlOperation(createJobs, {formData}))
      console.log("Created Job", results);
      setFormData(initialState)
    } catch (error) {
      console.log(error)
      
    }
  }



  return (
    <div className='job__btn'>
      <div className=''>
        <Button
          variant='contained'
          id='jobs-btn'
          style={{ padding: ".71rem", fontSize: "1rem" }}
          onClick={saveJobHandler}
        >
          {" "}
          Save Job{" "}
        </Button>
      </div>
      <div className=''>
        <Button
          variant='contained'
          color='secondary'
          style={{ padding: ".71rem", fontSize: "1rem" }}
        >
          {" "}
          Cancel{" "}
        </Button>
      </div>
    </div>
  );
};

export default JobBtn;
