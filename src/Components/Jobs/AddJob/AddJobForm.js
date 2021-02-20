import React, { useState } from "react";
import "date-fns";
import TextField from "@material-ui/core/TextField";
import FileDropForm from "./FileDropForm";
import InvoiceSection from "./InvoiceSection";
import CaseInfo from "./CaseInfo";
import ClientInfo from "./ClientInfo";
import ServerInfo from "./ServerInfo";
import PlacesAutocompleteComponent from "./PlacesAutocomplete";

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

const AddJobForm = (props) => {
  const [formData, setFormData] = useState(initialState);

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
            name='personBeingServed'
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
      />
    </>
  );
};

export default AddJobForm;
