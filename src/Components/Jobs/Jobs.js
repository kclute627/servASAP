import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { API, graphqlOperation } from "aws-amplify";
import { listJobss } from "../../graphql/queries";
import { Link } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import JobsDasboard from './JobsDashboard/JobsDasboard'

const Jobs = ({ history }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    getJobs();
  }, []);

  const getJobs = async () => {
    try {
      setLoading(true);
      const jobs = await API.graphql(graphqlOperation(listJobss));
      console.log('jobs', jobs)
      setJobs([...jobs.data.listJobss.items]);
      setLoading(false);
    } catch (error) {
      console.log(error, 'jobs error')
    }
  };
  return (
    <div className='jobs'>
      <div className='jobs__top'>
        <h5>JOBS</h5>
        <Link to='/jobs/add'>
          <Button
            variant='contained'
            color='primary'
            endIcon={<CloudUploadIcon />}
            style={{ backgroundColor: "#123c69" }}
            className='jobs__button'
          >
            Add A Job
          </Button>
        </Link>
      </div>
      <div className='jobs__middle'> 
        {loading && <CircularProgress />}

        {!loading && (
          <div style={{ color: "black" }}>
            

            <JobsDasboard history={history}jobs={jobs}/>
          </div>
        )}
      </div>
    </div>
  );
};

export default Jobs;
