import React from "react";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { Link } from "react-router-dom";

const Jobs = () => {
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
