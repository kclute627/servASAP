import React, {useState, useEffect} from "react";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { API, graphqlOperation } from "aws-amplify";
import {listJobs} from '../../graphql/queries'
import { Link } from "react-router-dom";

const Jobs = () => {



  const [jobs, setJobs] = useState([])


  useEffect(()=> {
     
    window.scrollTo(0, 0)

 getJobs()
  }, [])



  const getJobs = async()=> {
    const jobs = await API.graphql(graphqlOperation(listJobs))

    setJobs(jobs)
    
  }
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

      {jobs.length > 0 && (
        <div>




          WE HAVE JOBS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        </div>
      )}
    </div>
  );
};

export default Jobs;
