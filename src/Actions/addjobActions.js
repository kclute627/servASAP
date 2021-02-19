import {
  ADD_JOB_FORM_DATA,
  ADD_JOB_FORM_SERVICE_DOCUMENTS_DESCRIPTION,
  ADD_JOB_FORM_CASENUMBER,
  ADD_JOB_FORM_CLIENTNAME,
} from "../constants/addJobConstants";


export const setFormData= (info, TYPE) => async(dispatch) => {

    try {
        dispatch({
            type: TYPE,
            payload: info,
        })
        
    } catch (error) {
        /// DISPATCH ERROR 
    }



}