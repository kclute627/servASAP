import React, { useState, useEffect } from "react";
import "date-fns";
import TextField from "@material-ui/core/TextField";
import FileDropForm from "./FileDropForm";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import InvoiceSection from "./InvoiceSection";
import { Autocomplete } from "@material-ui/lab";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { DropzoneArea } from "material-ui-dropzone";
import Switch from "@material-ui/core/Switch";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

const servers = [
  {
    name: "Blank",
    lic: "",
  },

  {
    name: "Kyle Clutter",
    lic: "115-009722",
  },
];
const court = [
  {
    name: "Cook County Civil Court",
  },
  {
    name: "Blank",
    lic: "",
  },
];

const commonDocuments = [
  "Summons",
  "Complaint",
  "Subpoena",
  "Subpoena to Testify",
  "Subpoena for Deposition",
  "Subpoena to Produce Documents",
  "Exhibits",
];

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
  const [addAddressBtn, setAddAddressBtn] = useState(false);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleAutoChange = (fullAddress) => {
    setFormData({
      ...formData,
      ...formData.serviceAddress,
      serviceAddress: { fullServiceAddress: fullAddress },
    });
  };
  const handleAltAutoChange = (fullAddress) => {
    setFormData({
      ...formData,
      ...formData.altAddress,
      altAddress: { fullServiceAddress: fullAddress },
    });
  };

  const btnClickHandler = (e) => {
    e.preventDefault();
    setAddAddressBtn(!addAddressBtn);
  };

  const handleSelect = async (newAddress) => {
    try {
      const results = await geocodeByAddress(newAddress);
      const latLang = await getLatLng(results[0]);

      const resultsArr = results[0].formatted_address.split(",");

      let updatedAddress = {
        street: resultsArr[0],
        city: resultsArr[1],
        state: resultsArr[2].split(" ")[1],
        zip: resultsArr[2].split(" ")[2],

        fullServiceAddress: results[0].formatted_address,
        lat: latLang.lat,
        lng: latLang.lng,
      };

      setFormData({
        ...formData,
        ...formData.serviceAddress,
        serviceAddress: { ...updatedAddress },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleAltSelect = async (newAddress) => {
    try {
      const results = await geocodeByAddress(newAddress);
      const latLang = await getLatLng(results[0]);

      const resultsArr = results[0].formatted_address.split(",");

      let updatedAddress = {
        street: resultsArr[0],
        city: resultsArr[1],
        state: resultsArr[2].split(" ")[1],
        zip: resultsArr[2].split(" ")[2],

        fullServiceAddress: results[0].formatted_address,
        lat: latLang.lat,
        lng: latLang.lng,
      };

      setFormData({
        ...formData,
        ...formData.altAddress,
        altAddress: { ...updatedAddress },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const useStyles = makeStyles((theme) =>
    createStyles({
      root: {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        marginTop: "1rem",
        padding: "1rem .5rem",
        "& > *": {
          margin: theme.spacing(0.5),
        },
      },

      previewChip: {
        minWidth: 260,
        maxWidth: 410,
        backgroundColor: "#ededed",
      },
    })
  );

  const classes = useStyles();

  const handleChip = (text) => {
    if (formData.documents.description.length === 0) {
      return setFormData({
        ...formData,

        documents: { ...formData.documents, description: text },
      });
    }

    let newDescription = `${formData.documents.description}; ${text}`;
    setFormData({
      ...formData,

      documents: { ...formData.documents, description: newDescription },
    });
  };

  const handleDocuments = (file, type) => {
    /// look into amplyfy s3 storage // combine pdf's

    if (type === "OTHER") {
      return setFormData({
        ...formData,
        documents: { ...formData.documents, otherDocs: file },
      });
    }

    return setFormData({
      ...formData,

      documents: { ...formData.documents, serviceDocs: file },
    });
  };

  const handleDescription = (e) => {
    setFormData({...formData, documents: {...formData.documents, description: e.target.value}})
  }

  const { altAddress } = formData;

  const addtionalAddress = (
    <div>
      <h4 className='h4'>Alternative Address</h4>
      <PlacesAutocomplete
        value={formData.altAddress.fullServiceAddress}
        onChange={handleAltAutoChange}
        onSelect={handleAltSelect}
        style={{ width: "100%" }}
        name='fullServiceAddress'
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => {
          return (
            <div>
              <TextField
                label='Service Address'
                style={{ width: "100%" }}
                autoComplete='new-password'
                name='fullAddress'
                variant='outlined'
                {...getInputProps({
                  placeholder: "Start Typing Service Address",
                  className: "location-search-input",
                  autoComplete: "new-password",
                  name: "fullAddress",
                })}
              />

              <div className='autocomplete-dropdown-container'>
                {loading && <div>... Loading </div>}
                {suggestions.map((suggestion) => {
                  const className = suggestion.active
                    ? "suggestion-item--active"
                    : "suggestion-item";

                  const style = suggestion.active
                    ? {
                        backgroundColor: "rgb(202, 202, 202)",
                        cursor: "pointer",
                      }
                    : { backgroundColor: "#ffffff", cursor: "pointer" };

                  return (
                    <div
                      className='autocomplete-dropdown'
                      style={{}}
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style,
                      })}
                      key={suggestion.description}
                      name='fullAddress'
                    >
                      <span> {suggestion.description} </span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        }}
      </PlacesAutocomplete>
      <div className='form-item' style={{ margin: "1rem 0", padding: 0 }}>
        <TextField
          value={altAddress.street}
          name='street'
          id='outlined-basic'
          label='Street'
          variant='outlined'
          style={{ width: "70%" }}
          autoComplete='new-password'
          onChange={(e) => handleChange(e)}
        />
        <TextField
          id='outlined-basic'
          label='Suite / Apt #'
          variant='outlined'
          value={altAddress.suite}
          name='suite'
          style={{ width: "25%" }}
          autoComplete='new-password'
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className='form-item' style={{ margin: 0, padding: 0 }}>
        <TextField
          id='outlined-basic'
          name='city'
          label='City'
          value={altAddress.city}
          variant='outlined'
          autoComplete='new-password'
          onChange={(e) => handleChange(e)}
          style={{ width: "37%" }}
        />
        <TextField
          id='outlined-basic'
          label='State'
          name='state'
          value={altAddress.state}
          variant='outlined'
          style={{ width: "37%" }}
          onChange={(e) => handleChange(e)}
        />

        <TextField
          id='outlined-basic'
          label='Zip'
          name='zip'
          value={altAddress.zip}
          variant='outlined'
          style={{ width: "25%" }}
          onChange={(e) => handleChange(e)}
        />
      </div>
    </div>
  );

  const { street, suite, city, zip, state } = formData.serviceAddress;

  return (
    <>
      <form className='form-group'>
        <div className='form-group-1'>
          <h3>Client Information </h3>
          <div className='form-group-span'></div>
          <div className='form-item'>
            <TextField
              id='outlined-basic'
              autoComplete='new-password'
              label='Company Name'
              name='clientName'
              onChange={handleChange}
              variant='outlined'
              style={{ width: "100%" }}
            />
          </div>

          <div className='form-item'>
            <TextField
              id='outlined-basic'
              label='Client Ref Number'
              variant='outlined'
              style={{ width: "100%" }}
              name='clientRef'
              onChange={handleChange}
            />
          </div>

          <h3>Process Server </h3>
          <div className='form-group-span'></div>
          <div className='form-item'>
            <Autocomplete
              freeSolo
              id='outlined-basic'
              label='Process Server'
              autoComplete='new-password'
              variant='outlined'
              options={servers.map((option) => option.name)}
              style={{ width: "100%" }}
              name='Servers'
              renderInput={(params) => (
                <TextField
                  {...params}
                  label='Process Server'
                  margin='normal'
                  variant='outlined'
                  name='server'
                  onChange={handleChange}
                  onSelect={handleChange}
                />
              )}
            />
          </div>

          <div>
            <h3>Case Information </h3>
            <div className='form-group-span'></div>
            <div className='form-item'>
              <TextField
                id='outlined-basic'
                label='Case Number'
                variant='outlined'
                style={{ width: "100%" }}
                name='caseNumber'
                onChange={handleChange}
              />
            </div>
            <div className='form-item'>
              <TextField
                id='outlined-basic'
                label='Plantiff'
                variant='outlined'
                style={{ width: "100%" }}
                name='plantiff'
                onChange={handleChange}
              />
            </div>

            <div className='form-item'>
              <TextField
                id='outlined-basic'
                label='Defendant'
                autoComplete='new-password'
                variant='outlined'
                style={{ width: "100%" }}
                name='defendant'
                onChange={handleChange}
              />
            </div>
            <div className='form-item'>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  format='MM/dd/yyyy'
                  autoOk
                  variant='inline'
                  label='Court Date'
                  autoComplete='new-password'
                  value={formData.courtDate}
                  onChange={(newValue) => {
                    setFormData({ ...formData, courtDate: newValue });
                  }}
                />
              </MuiPickersUtilsProvider>
            </div>

            <div className='form-item'>
              {/*todo --- try to find an autocomplete solution where courts are loaded from the user / company profile  */}

              <TextField
                id='outlined-basic'
                label='Court Name'
                variant='outlined'
                autoComplete='new-password'
                name='court'
                select
                style={{ width: "100%" }}
                SelectProps={{
                  native: true,
                }}
                name='courtName'
                onChange={handleChange}
              >
                {court.map((option) => (
                  <option key={option.name} value={option.name}>
                    {option.name}
                  </option>
                ))}
              </TextField>
            </div>
          </div>
          <h3>Server Instructions </h3>
          <div className='form-group-span'></div>

          <div className='form-item'>
            <FormControlLabel
              control={
                <Switch
                  checked={formData.rush}
                  onChange={() =>
                    setFormData({ ...formData, rush: !formData.rush })
                  }
                  name='rush'
                  color='primary'
                />
              }
              label='RUSH'
            />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                format='MM/dd/yyyy'
                autoOk
                variant='inline'
                label='Due Date'
                value={formData.dueDate}
                style={{ width: "35%" }}
                onChange={(newValue) => {
                  setFormData({ ...formData, dueDate: newValue });
                }}
              />
            </MuiPickersUtilsProvider>
          </div>
          <div className='form-item'>
            {/* todo - Put Chips in Like I did for the description of the documents being served */}
            <textarea
              name=''
              id=''
              placeholder='Process Server Instructions'
              className='form-textarea'
              value={formData.serverInstructions}
              name='serverInstructions'
              onChange={handleChange}
            ></textarea>
          </div>
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
        <h3> Service Address </h3>
        <div className='form-group-span'></div>
        <div className='form-item'>
          {/* places complete */}
          <div>
            <PlacesAutocomplete
              value={formData.serviceAddress.fullServiceAddress}
              onChange={handleAutoChange}
              onSelect={handleSelect}
              style={{ width: "100%" }}
              name='fullServiceAddress'
            >
              {({
                getInputProps,
                suggestions,
                getSuggestionItemProps,
                loading,
              }) => {
                return (
                  <div>
                    <TextField
                      label='Service Address'
                      style={{ width: "100%" }}
                      autoComplete='new-password'
                      name='fullAddress'
                      variant='outlined'
                      {...getInputProps({
                        placeholder: "Start Typing Service Address",
                        className: "location-search-input",
                        autoComplete: "new-password",
                        name: "fullAddress",
                      })}
                    />

                    <div className='autocomplete-dropdown-container'>
                      {loading && <div>... Loading </div>}
                      {suggestions.map((suggestion) => {
                        const className = suggestion.active
                          ? "suggestion-item--active"
                          : "suggestion-item";

                        const style = suggestion.active
                          ? {
                              backgroundColor: "rgb(202, 202, 202)",
                              cursor: "pointer",
                            }
                          : { backgroundColor: "#ffffff", cursor: "pointer" };

                        return (
                          <div
                            className='autocomplete-dropdown'
                            style={{}}
                            {...getSuggestionItemProps(suggestion, {
                              className,
                              style,
                            })}
                            key={suggestion.description}
                            name='fullAddress'
                          >
                            <span> {suggestion.description} </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              }}
            </PlacesAutocomplete>
            <div className='form-item' style={{ margin: "1rem 0", padding: 0 }}>
              <TextField
                value={street}
                name='street'
                id='outlined-basic'
                label='Street'
                variant='outlined'
                style={{ width: "70%" }}
                autoComplete='new-password'
                onChange={(e) => handleChange(e)}
              />
              <TextField
                id='outlined-basic'
                label='Suite / Apt #'
                variant='outlined'
                value={suite}
                name='suite'
                style={{ width: "25%" }}
                autoComplete='new-password'
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className='form-item' style={{ margin: 0, padding: 0 }}>
              <TextField
                id='outlined-basic'
                name='city'
                label='City'
                value={city}
                variant='outlined'
                autoComplete='new-password'
                onChange={(e) => handleChange(e)}
                style={{ width: "37%" }}
              />
              <TextField
                id='outlined-basic'
                label='State'
                name='state'
                value={state}
                variant='outlined'
                style={{ width: "37%" }}
                onChange={(e) => handleChange(e)}
              />

              <TextField
                id='outlined-basic'
                label='Zip'
                name='zip'
                value={zip}
                variant='outlined'
                style={{ width: "25%" }}
                onChange={(e) => handleChange(e)}
              />
            </div>
            {addAddressBtn && addtionalAddress}
            <Button
              onClick={(e) => btnClickHandler(e)}
              style={{ marginTop: ".51rem" }}
            >
              {!addAddressBtn
                ? " Add Additional Address"
                : "Remove Additional Address"}
            </Button>
          </div>

          {/* <PlacesAutocomplete /> */}
        </div>

        {/* <FileDropForm /> */}
        <h3>Documents to Be Served</h3>
        <div className='form-group-span'></div>
        <div className='form-item' style={{ margin: 0 }}>
          <div style={{ width: "100%", marginTop: "1.25rem" }}>
            {/* //Make Clickable Chips With common Documents // then make field where you can add new Chips */}
            <h4>
              Common Documents - Click All That Apply or Start Typing Below{" "}
            </h4>
            <h5></h5>
            <Paper component='ul' className={classes.root}>
              {commonDocuments.map((doc, i) => (
                <Chip
                  label={doc}
                  color='primary'
                  key={i}
                  clickable
                  onClick={() => handleChip(doc)}
                />
              ))}
            </Paper>
            <textarea
              style={{
                width: "97%",
                height: "5rem",
                margin: "1rem 0",
                fontSize: "1.1rem",
                fontWeight: 700,
              }}
              name=''
              id=''
              placeholder='Documents To Be Served (As You Want Them To Appear on the Affidavit)'
              className='form-textarea'
              value={formData.documents.description}
              name='description'
              onChange={handleDescription} 
            ></textarea>
            <DropzoneArea
              className='dropZone'
              onChange={(files) => handleDocuments(files)}
              dropzoneText='Drag or Click To Add All Service Documents'
              showPreviews={true}
              showPreviewsInDropzone={false}
              filesLimit={14}
              maxFileSize={5000000}
              useChipsForPreview
              previewGridProps={{ container: { spacing: 1, direction: "row" } }}
              previewChipProps={{ classes: { root: classes.previewChip } }}
              previewText='Documents For Service'
            />
            {/* {create TextForm Where I Can Name the Docuemt}  Also make user friendly for people who do not load documents   */}
          </div>
        </div>
        <h3 style={{ marginTop: "2rem" }}>
          Other Docs - Pictures, Signed Proofs, etc.
        </h3>
        <div className='form-group-span' style={{ marginBottom: "2rem" }}></div>

        <div className='form-item' style={{ margin: 0 }}>
          <div style={{ width: "100%", marginTop: "1.25rem" }}>
            <DropzoneArea
              className='dropZone'
              onChange={(files) => handleDocuments(files, "OTHER")}
              dropzoneText='Drag or Click To Add Other Docs'
              showPreviews={true}
              showPreviewsInDropzone={false}
              filesLimit={3}
              maxFileSize={5000000}
              useChipsForPreview
              previewGridProps={{
                container: { spacing: 1, direction: "row" },
              }}
              previewChipProps={{ classes: { root: classes.previewChip } }}
              previewText='Other Documents'
            />
          </div>
        </div>
      </form>
      <InvoiceSection />
    </>
  );
};

export default AddJobForm;
