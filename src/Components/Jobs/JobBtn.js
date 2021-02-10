import React from "react";
import Button from "@material-ui/core/Button";

const JobBtn = (props) => {
  return (
    <div className='job__btn'>
      <div className=''>
        <Button variant='contained' id='jobs-btn' style={{padding: ".71rem", fontSize: '1rem'}}>
          {" "}
          Save Job{" "}
        </Button>
      </div>
      <div className=''>
        <Button variant='contained' color='secondary' style={{padding: ".71rem", fontSize: '1rem'}}>
          {" "}
          Cancel{" "}
        </Button>
      </div>
    </div>
  );
};

export default JobBtn;
