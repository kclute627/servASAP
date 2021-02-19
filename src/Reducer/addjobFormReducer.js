import {
  ADD_JOB_FORM_CASEDEF,
  ADD_JOB_FORM_CASENUMBER,
  ADD_JOB_FORM_CASEPLANTIFF,
  ADD_JOB_FORM_CLIENTNAME,
  ADD_JOB_FORM_CLIENTREF,
  ADD_JOB_FORM_COURTDATE,
  ADD_JOB_FORM_COURTNAME,
  ADD_JOB_FORM_DUEDATE,
  ADD_JOB_FORM_INSTRUCTIONS,
  ADD_JOB_FORM_PERSONSERVED,
  ADD_JOB_FORM_RUSH,
  ADD_JOB_FORM_SERVER,
  ADD_JOB_FORM_SERVICEADDRESS,
  ADD_JOB_FORM_SERVICEADDRESS_LAT,
  ADD_JOB_FORM_SERVICEADDRESS_LNG,
  ADD_JOB_FORM_SERVICEADDRESS_CITY,
  ADD_JOB_FORM_SERVICEADDRESS_ADDRESS,
  ADD_JOB_FORM_SERVICEADDRESS_ZIP,
  ADD_JOB_FORM_SERVICEADDRESS_SUITE,
  ADD_JOB_FORM_SERVICEADDRESS_STATE,
  ADD_JOB_FORM_OTHERDOCS,
  ADD_JOB_FORM_SERVICE_DOCUMENTS_DESCRIPTION,
  ADD_JOB_FORM_INVOICE,
  ADD_JOB_FORM_SERVICE_DOCUMENTS,
  ADD_JOB_FORM_INVOICE_DELETE
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
    case ADD_JOB_FORM_CLIENTNAME:
      return { ...state, clientName: payload };
    case ADD_JOB_FORM_CLIENTREF:
      return { ...state, clientRef: payload };
    case ADD_JOB_FORM_SERVER:
      return { ...state, server: payload };
    case ADD_JOB_FORM_CASENUMBER:
      return { ...state, caseNumber: payload };
    case ADD_JOB_FORM_CASEPLANTIFF:
      return { ...state, plantiff: payload };
    case ADD_JOB_FORM_CASEDEF:
      return { ...state, defendant: payload };
    case ADD_JOB_FORM_COURTDATE:
      return { ...state, courtDate: payload };
    case ADD_JOB_FORM_COURTNAME:
      return { ...state, courtName: payload };

    case ADD_JOB_FORM_RUSH:
      return { ...state, rush: payload };
    case ADD_JOB_FORM_DUEDATE:
      return { ...state, dueDate: payload };

    case ADD_JOB_FORM_INSTRUCTIONS:
      return { ...state, serverInstructions: payload };

    case ADD_JOB_FORM_PERSONSERVED:
      return { ...state, personBeingServed: payload };
    case ADD_JOB_FORM_SERVICEADDRESS:
      return {
        ...state,
        serviceAddress: {
          fullServiceAddress: payload,
        },
      };
    case ADD_JOB_FORM_SERVICEADDRESS_ADDRESS:
      return {
        ...state,
        serviceAddress: {
          street: payload.street,
          city: payload.city,
          state: payload.state,
          zip: payload.zip,
          fullServiceAddress: payload.fullServiceAddress,
          lat: payload.lat,
          lng: payload.lng,
        },
      };
    case ADD_JOB_FORM_SERVICEADDRESS_SUITE:
      return {
        ...state,
        serviceAddress: {
          suite: payload,
        },
      };

    case ADD_JOB_FORM_SERVICEADDRESS_CITY:
      return {
        ...state,
        serviceAddress: {
          city: payload,
        },
      };
    case ADD_JOB_FORM_SERVICEADDRESS_ZIP:
      return {
        ...state,
        serviceAddress: {
          zip: payload,
        },
      };
    case ADD_JOB_FORM_SERVICEADDRESS_STATE:
      return {
        ...state,
        serviceAddress: {
          state: payload,
        },
      };
    case ADD_JOB_FORM_SERVICEADDRESS_LAT:
      return {
        ...state,
        serviceAddress: {
          lat: payload,
        },
      };
    case ADD_JOB_FORM_SERVICEADDRESS_LNG:
      return {
        ...state,
        serviceAddress: {
          lng: payload,
        },
      };
    case ADD_JOB_FORM_SERVICE_DOCUMENTS_DESCRIPTION:
      return {
        ...state,
        documents: {
          ...state.documents,
          description: payload,
        },
      };
    case ADD_JOB_FORM_SERVICE_DOCUMENTS:
      return {
        ...state,
        documents: {
          ...state.documents,
          serviceDocs: [payload],
        },
      };
    case ADD_JOB_FORM_OTHERDOCS:
      return {
        ...state,
        documents: {
          ...state.documents,
          otherDocs: payload,
        },
      };
    case ADD_JOB_FORM_INVOICE:
      return {
        ...state,
        invoice: [...state.invoice, payload],
      };
    case ADD_JOB_FORM_INVOICE_DELETE:
      return {
        ...state,
        invoice: payload,
      };

    default:
      return {
        ...state,
      };
  }
};
