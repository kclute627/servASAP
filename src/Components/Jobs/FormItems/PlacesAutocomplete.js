import React, { useState} from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

const PlacesAutocompleteComponent = ({ formData, setFormData }) => {
  const [addAddressBtn, setAddAddressBtn] = useState(false);
  const { street, suite, city, zip, state } = formData.serviceAddress;

  const handleAutoChange = (fullAddress) => {
    setFormData({
      ...formData,
      serviceAddress: {
        ...formData.serviceAddress,
        fullServiceAddress: fullAddress,
      },
    });
  };
  const handleAltAutoChange = (fullAddress) => {
    setFormData({
      ...formData,
      altAddress: {
        ...formData.altAddress,
        fullServiceAddress: fullAddress,
      },
    });
  };

  const btnClickHandler = (e) => {
    e.preventDefault();
    setAddAddressBtn(!addAddressBtn);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      serviceAddress: {
        ...formData.serviceAddress,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleAltChange = (e) => {
    setFormData({
      ...formData,
      altAddress: {
        ...formData.altAddress,
        [e.target.name]: e.target.value,
      },
    });
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
        serviceAddress: { ...formData.serviceAddress, ...updatedAddress },
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

        altAddress: { ...formData.altAddress, ...updatedAddress },
      });
    } catch (error) {
      console.log(error);
    }
  };

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
          onChange={(e) => handleAltChange(e)}
        />
        <TextField
          id='outlined-basic'
          label='Suite / Apt #'
          variant='outlined'
          value={altAddress.suite}
          name='suite'
          style={{ width: "25%" }}
          autoComplete='new-password'
          onChange={(e) => handleAltChange(e)}
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
          onChange={(e) => handleAltChange(e)}
          style={{ width: "37%" }}
        />
        <TextField
          id='outlined-basic'
          label='State'
          name='state'
          value={altAddress.state}
          variant='outlined'
          style={{ width: "37%" }}
          onChange={(e) => handleAltChange(e)}
        />

        <TextField
          id='outlined-basic'
          label='Zip'
          name='zip'
          value={altAddress.zip}
          variant='outlined'
          style={{ width: "25%" }}
          onChange={(e) => handleAltChange(e)}
        />
      </div>
    </div>
  );

  return (
    <>
      <h3> Service Address </h3>
      <div className='form-group-span'></div>
      <div className='form-item'>
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
      </div>
    </>
  );
};
export default PlacesAutocompleteComponent;
