import { createJobs } from "../../../graphql/mutations";

import { API, graphqlOperation } from "aws-amplify";

import {
  ADD_JOB_FAIL,
  ADD_JOB_REQUEST,
  ADD_JOB_SUCCESS,
} from "../constants/addJobConstants";

export const setFormData = (data) => async (dispatch) => {
  try {
    const results = await API.graphql(
      graphqlOperation(createJobs, { input: data })
    );
    console.log("Created Job", results);

    dispatch({
      type: ADD_JOB_SUCCESS,
      payload: data, 
    });

    history.push("/jobs");
  } catch (error) {
    /// DISPATCH ERROR

    dispatch({
      type: ADD_JOB_FAIL,
      payload: data,
    });
  }
};
