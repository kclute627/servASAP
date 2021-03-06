import React, { useState, useEffect } from "react";
import "date-fns";
import TextField from "@material-ui/core/TextField";
import FileDropForm from "./FileDropForm";
import InvoiceSection from "./InvoiceSection";
import CaseInfo from "./CaseInfo";
import ClientInfo from "./ClientInfo";
import ServerInfo from "./ServerInfo";
import PlacesAutocompleteComponent from "./PlacesAutocomplete";
import { API, graphqlOperation } from "aws-amplify";
import { listJobss } from "../../../graphql/queries";

const initialState = {
  jobNumber: 0,
  status: ['Out For Service'],
  clientName: '',  
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
  personServed: "",
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
  altAddress: {
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

const AddJobForm = ({history}) => {

  useEffect(()=> {
    setJobNumber()
  }, [])
 
  const [formData, setFormData] = useState(initialState);
  const setJobNumber = async() => {
    try {
       const result = await API.graphql(graphqlOperation(listJobss))

       setFormData({...formData, jobNumber: result.data.listJobss.items.length})


    } catch (error) {
     const jobNumber = Math.random() * 100000
      setFormData({...formData, jobNumber: Math.floor(jobNumber)})

    }
   
  }
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <>
      <form className='form-group'>
        <div className='form-group-1'>
          <ClientInfo
            setFormData={setFormData}
            formData={formData}
            handleChange={handleChange}
          />
          <ServerInfo
            setFormData={setFormData}
            formData={formData}
            handleChange={handleChange}
          />
        </div>
        <h3> Person / Company Being Served </h3>
        <div className='form-group-span'></div>
        <div className='form-item'>
          <TextField
            id='outlined-basic'
            label='Name'
            variant='outlined' 
            autoComplete='new-password'
            style={{ width: "100%" }}
            name='personServed' 
            onChange={handleChange}
          />
        </div>
        <CaseInfo
          setFormData={setFormData}
          formData={formData}
          handleChange={handleChange}
        />

        <PlacesAutocompleteComponent
          setFormData={setFormData}
          formData={formData}
        />
        <FileDropForm setFormData={setFormData} formData={formData} />
      </form>
      <InvoiceSection
         setFormData={setFormData}
         formData={formData}
         handleChange={handleChange}
         initialState= {initialState}
         history={history}

      />
    </>
  );
};

export default AddJobForm;
