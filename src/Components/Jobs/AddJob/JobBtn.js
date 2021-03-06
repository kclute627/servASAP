import React from "react";
import Button from "@material-ui/core/Button";
import {useDispatch} from 'react-redux'
import { createJobs } from "../../../graphql/mutations";
import { API, graphqlOperation } from "aws-amplify";
import {setAlert} from '../../../Actions/alertActions'

const JobBtn = ({formData, setFormData, initialState, history}) => {
    
  const dispatch = useDispatch()

  const saveJobHandler = async() => {  
    if(formData.clientName.length <= 2){
      return dispatch(setAlert('Must Enter Client Name', 'error'))
    }
    try {
      const results = await API.graphql(graphqlOperation(createJobs, {input: formData}))
      console.log("Created Job", results.data.createJobs);
      setFormData(initialState) 
      dispatch(setAlert('Suscessfully Created A New Job', 'success'))
      history.push('/jobs')

     
     
    } catch (error) {
      console.log(error)
      return dispatch(setAlert(`${error.message}`, 'error'))
      
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
