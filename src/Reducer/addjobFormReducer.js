import {
  ADD_JOB_REQUEST,
  ADD_JOB_FAIL,
  ADD_JOB_SUCCESS 
} from "../constants/addJobConstants";

const initialState = {
  clientName: "",
  clientRef: "",
  server: "",
  caseNumber: "",
  plantiff: "",
  defendant: "",
  courtDate: new Date(),
  courtName: "",
  rush: false,
  dueDate: new Date(), 
  serverInstructions: "",
  personBeingServed: "",
  serviceAddress: {
    fullServiceAddress: "", 
    street: "",
    suite: "",
    city: "",
    state: "",
    zip: "",
    lat: "",
    lng: "",
  },
  documents: {
    description: "",
    serviceDocs: [],
    otherDocs: [],
  },
  invoice: [],
};

export const setFormData = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_JOB_SUCCESS:
      return { ...state, payload };
    

    default:
      return {
        ...state,
      };
  }
};
