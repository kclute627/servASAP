import React, {useEffect} from "react";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { Link } from "react-router-dom";

const Jobs = () => {
  useEffect(()=> {
    
    window.scrollTo(0, 0)
  }, [])

  
  return (
    <div className="jobs">
      JOBS
      <Link  to="/jobs/add">
        <Button
          variant="contained"
          color="primary"
          endIcon={<CloudUploadIcon />}
          style={{ backgroundColor: "#123c69" }}
          className="jobs__button"
         
        >
          Add A Job
        </Button>
      </Link>
    </div>
  );
};

export default Jobs;
