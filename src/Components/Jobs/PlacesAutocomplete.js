import React, { useState, useEffect } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { setFormData } from "../../Actions/addjobActions";
import {ADD_JOB_FORM_SERVICEADDRESS, ADD_JOB_FORM_SERVICEADDRESS_ADDRESS} from '../../constants/addJobConstants';

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

const PlacesAutocompleteComponent = (props) => {


  let formData = useSelector((state) => state.setFormData)
  
  const dispatch = useDispatch();


  const [addAddressBtn, setAddAddressBtn] = useState(false);
  const [address, setAddress] = useState({
    fullAddress: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    suite: "",
  });

  const [altAddress, setAltAddress] = useState({
    fullAddress: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    suite: "",
  });

  const handleChange = (e) => {
    let updatedAddress = {...formData.serviceAddress, [e.target.name]: e.target.value }
    dispatch(setFormData(updatedAddress, ADD_JOB_FORM_SERVICEADDRESS_ADDRESS))
   
  };

  //updated all the alt Address INFORMATION
  const handleAutoChange = (fullAddress) => {
    dispatch(setFormData(fullAddress, ADD_JOB_FORM_SERVICEADDRESS))
  };
  const handleAltAutoChange = (fullAddress) => {

    dispatch(setFormData(fullAddress, ADD_JOB_FORM_SERVICEADDRESS))
    
  };

  const handleAltSelect = async (newAddress) => {
    try {
      const results = await geocodeByAddress(newAddress);
      const latLang = await getLatLng(results[0]);

     

      const resultsArr = results[0].formatted_address.split(",");
     

      setAltAddress({
        ...address,
        street: resultsArr[0],
        city: resultsArr[1],
        state: resultsArr[2].split(" ")[1],
        zip: resultsArr[2].split(" ")[2],

        fullAddress: results[0].formatted_address,
      });
    } catch (error) {
      console.log(error);
    }
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

      dispatch(setFormData(updatedAddress, ADD_JOB_FORM_SERVICEADDRESS_ADDRESS))

    } catch (error) {
      console.log(error);
    }
  };

  const btnClickHandler = (e) => {
    e.preventDefault();
    setAddAddressBtn(!addAddressBtn);
    setAltAddress({
      fullAddress: "",
      street: "",
      city: "",
      state: "",
      zip: "",
      suite: "",
    });
  };

  const { fullServiceAddress, city, street, zip, state, suite } = formData.serviceAddress;
   
  const addtionalAddress = (
    <div>
      <h4 className='h4'>Alternative Address</h4>
      <PlacesAutocomplete
        value={altAddress.fullAddress}
        onChange={handleAltAutoChange}
        onSelect={handleAltSelect}
        style={{ width: "100%" }}
        name='fullAddress'
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => {
          return (
            <div>
              <TextField
                label='Service Address'
                style={{ width: "100%" }}
                autoComplete='new-password'
                name='fullAddress'
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

  return (
    <div>
      
    </div>
  );
};

export default PlacesAutocompleteComponent;
