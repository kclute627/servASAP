import React, { useState } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from '@material-ui/core/TextField';

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

const PlacesAutocompleteComponent = (props) => {
  const [address, setAddress] = useState({
      fullAddress: '',
      street: '',
      city: '',
      state: '',
      zip: '' ,
      suite: ''
  });


  const handleChange = (e) => {

    setAddress({...address, [e.target.name]: e.target.value });
  };
  const handleAutoChange = (fullAddress) => {

    setAddress({...address, fullAddress});  
  };

  const handleSelect = async (newAddress) => {
    try {
      const results = await geocodeByAddress(newAddress);
      const latLang = await getLatLng(results[0]);   

    
      console.log(results, 'results')

      const resultsArr = results[0].formatted_address.split(',')
        console.log( resultsArr[2].split(' '), "result arr");

      setAddress({ 
          ...address,
        street: resultsArr[0],
        city: resultsArr[1],
        state: resultsArr[2].split(' ')[1],
        zip: resultsArr[2].split(' ')[2],
        
        fullAddress: results[0].formatted_address}) 
    } catch (error) {
      console.log(error);
    }
  };

  const {fullAddress, city, street, zip, state, suite} = address
  return (    
  <div  >

      <PlacesAutocomplete
        value={fullAddress}
  
        onChange={handleAutoChange}

        onSelect={handleSelect} 
        style={{ width: "100%" }} 
        name='fullAddress'
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => {
          return (
            <div>
              <TextField
              label='Service Address'
              style={{ width: "100%" }}
              autoComplete="new-password"
              name='fullAddress'
                {...getInputProps({
                  placeholder: "Start Typing Service Address",
                  className: "location-search-input",
                  autoComplete: "new-password",
                  name: 'fullAddress'
                })}
              />


               <div className='autocomplete-dropdown-container'>
                {loading && <div>... Loading </div>}
                {suggestions.map((suggestion) => { 
                  const className = suggestion.active
                    ? "suggestion-item--active" 
                    : "suggestion-item";

                  const style = suggestion.active
                    ? { backgroundColor: "rgb(202, 202, 202)", cursor: "pointer" }
                    : { backgroundColor: "#ffffff", cursor: "pointer" };

                  return (
                    <div className='autocomplete-dropdown'
                    style={{}}
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style,
                      })}
                      key={suggestion.description}
                      name= 'fullAddress'
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
      <div className='form-item' style={{margin: '1rem 0', padding: 0}}>
          <TextField
            value={street}
            name='street'
            id='outlined-basic'
            label='Street'
            variant='outlined'
            style={{ width: "70%" }}
            autoComplete="new-password"
            onChange={e => handleChange(e)}
         
            
          />
          <TextField
            id='outlined-basic'
            label='Suite / Apt #'
            variant='outlined'
            value={suite}
            name='suite'
            style={{ width: "25%" }}
            autoComplete="new-password"
            onChange={e => handleChange(e)}
          />
        </div>
        <div className='form-item'style={{margin: 0, padding: 0}}>
          <TextField
            id='outlined-basic'
            name='city'
            label='City'
            value={city}
            variant='outlined'
            autoComplete="new-password"
            onChange={e => handleChange(e)}

            style={{ width: "37%" }}
          />
          <TextField
            id='outlined-basic'
            label='State'
            name='state'
            value={state}
            variant='outlined'
            style={{ width: "37%" }}
            onChange={e => handleChange(e)}
          />

          <TextField
            id='outlined-basic'
            label='Zip'
            name='zip'
            value={zip}
            variant='outlined'
            style={{ width: "25%" }}
            onChange={e => handleChange(e)}
          />
        </div>
    </div>
  );
};

export default PlacesAutocompleteComponent;
