/* eslint-disable no-unused-vars */
import { Field } from 'redux-form'
import { geocodeByAddress, geocodeByPlaceLocation } from './util'

import PlacesAutocomplete, { getLatLng } from 'react-places-autocomplete'
import React, { useState, useEffect } from 'react'
import './style.scss'
import TextField from '@material-ui/core/TextField'

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField
    label={label}
    error={!!(touched && error)}
    helperText={touched && error}
    {...input}
    {...custom}
  />
)
function InputSearchPlace(props) {
  const source = props.source
  console.log(props)

  const [address, setAddress] = useState('')
  const [latitude, setLatitude] = useState(-34.1703131)
  const [longitude, setLongitude] = useState(-70.74064759999999)
  const [errorMessage, setErrorMessage] = useState('')
  const [streetName, setStreetName] = useState('')
  const [streetNumber, setStreetNumber] = useState('')
  const [departmentNumber, setDepartmentNumber] = useState('')
  const [city, setCity] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [administrativeAreaLevel1, setAdministrativeAreaLevel1] = useState('')
  const [administrativeAreaLevel2, setAdministrativeAreaLevel2] = useState('')
  const [country, setCountry] = useState('')
  const [formatted_address, setFormatted_address] = useState('')
  const [place_id, setPlace_id] = useState('')
  const [componentForm, setComponentForm] = useState({
    street_number: 'short_name',
    route: 'long_name',
    locality: 'long_name',
    administrative_area_level_1: 'short_name',
    country: 'long_name',
    postal_code: 'short_name',
    administrative_area_level_2: 'short_name',
    establishment: 'long_name',
    park: 'long_name',
    point_of_interest: 'long_name',
    stadium: 'long_name'
  })

  const handleChange = address => {
    console.log(address)
    setAddress(address)
  }

  const handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error))
  }
  const fillInAddress = (place, site) => {
    return new Promise((resolve, reject) => {
      try {
        for (var i = 0; i < place.address_components.length; i++) {
          var addressType = place.address_components[i].types[0]

          if (componentForm[addressType]) {
            if (addressType === 'street_number') {
              let cadena = place.address_components[i][componentForm[addressType]]
              let aux = cadena.split(',')
              setStreetNumber(aux[0])
              try {
                setDepartmentNumber(aux[1])
              } catch (e) {
                setDepartmentNumber('')
              }
            } else if (addressType === 'route') {
              setStreetName(streetName + place.address_components[i][componentForm[addressType]])
            } else if (
              addressType === 'establishment' ||
              addressType === 'park' ||
              addressType === 'point_of_interest' ||
              addressType === 'stadium'
            ) {
              setStreetName(
                place.address_components[i][componentForm[addressType]] + ' - ' + streetName)
            } else if (addressType === 'locality') {
              setCity(place.address_components[i][componentForm[addressType]])
            } else if (addressType === 'postal_code') {
              setPostalCode(place.address_components[i][componentForm[addressType]])
            } else if (addressType === 'administrative_area_level_1') {
              setAdministrativeAreaLevel1(place.address_components[i][componentForm[addressType]])
            } else if (addressType === 'administrative_area_level_2') {
              setAdministrativeAreaLevel2(place.address_components[i][componentForm[addressType]])
            } else if (addressType === 'country') {
              setCountry(place.address_components[i][componentForm[addressType]])
            }
          }
        }

        if (site === 'marker') {
          setLatitude(place.geometry.location.lat())
          setLongitude(place.geometry.location.lng())
          setAddress(place.formatted_address)
        } else {
          setLatitude(place.geometry.location.lat())
          setLongitude(place.geometry.location.lng())
        }

        iniciarMap()
        resolve(1)
      } catch (e) {
        reject(e)
      }
    })
  }

  const update = e => {
    const LatLng = {
      lat: e.latLng.lat(),
      lng: e.latLng.lng()
    }
    geocodeByPlaceLocation(LatLng).then(res => {
      fillInAddress(res[0], 'marker')
    })
  }
  useEffect(() => {
    iniciarMap()
  })
  const iniciarMap = () => {
    var map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: latitude, lng: longitude },
      zoom: 17,
      mapTypeControl: true,
      mapTypeControlOptions: {
        style: window.google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: window.google.maps.ControlPosition.TOP_CENTER
      },
      zoomControl: true,
      zoomControlOptions: {
        position: window.google.maps.ControlPosition.LEFT_CENTER
      },
      scaleControl: true,
      streetViewControl: true,
      streetViewControlOptions: {
        position: window.google.maps.ControlPosition.LEFT_TOP
      },
      fullscreenControl: true
    })
    var position = { lat: latitude, lng: longitude }

    var marker = new window.google.maps.Marker({ position: position, map: map, draggable: true })

    window.google.maps.event.addListener(marker, 'dragend', update)
  }

  return (
    <div>
      <PlacesAutocomplete value={address} onChange={handleChange} onSelect={handleSelect}>
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                label: 'Search Places ...',
                className: 'location-search-input'
              })}
            />
            <div className='autocomplete-dropdown-container'>
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active ? 'suggestion-item--active' : 'suggestion-item'
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' }
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      {errorMessage.length > 0 && <div className='error-message'>{errorMessage}</div>}

      <div>
        <div id='map' className='map'>
          mapa
        </div>
        <div id='infowindow-content'>
          <img src='' width='16' height='16' id='place-icon' alt=''/>
          <div id='place-name' className='title' />
          <div id='place-address' />
        </div>
      </div>
      <div>
        <div className='divInput FormInput-input-55'>
          <Field
            name={source + '.streetName'}
            component={renderTextField}
            type='text'
            label='Calle'
            className='field'
            parse={streetName}
          />
        </div>
        <div className='divInput FormInput-input-55'>
          <Field
            name={source + '.streetNumber'}
            component={renderTextField}
            type='text'
            className='field'
            label='Número'
            options={{ value: '123' }}
          />
        </div>

        <div className='divInput FormInput-input-55'>
          <Field
            name={source + '.departmentNumber'}
            component={renderTextField}
            type='text'
            label='Numero de departamento'
            className='field'
          />
        </div>
        <div className='divInput FormInput-input-55'>
          <Field
            name={source + '.city'}
            component={renderTextField}
            type='text'
            label='Ciudad'
            className='field'
          />
        </div>
        <div className='divInput FormInput-input-55'>
          <Field
            name={source + '.postalCode'}
            component={renderTextField}
            type='text'
            label='Código postal'
            className='field'
          />
        </div>
        <div className='divInput FormInput-input-55'>
          <Field
            name={source + '.place_id'}
            component={renderTextField}
            type='text'
            label='Id lugar'
            className='field'
          />
        </div>
        <div className='divInput FormInput-input-55'>
          <Field
            name={source + '.longitude'}
            component={renderTextField}
            type='text'
            label='Longitud'
            className='field'
          />
        </div>
        <div className='divInput FormInput-input-55'>
          <Field
            name={source + '.latitude'}
            component={renderTextField}
            type='number'
            label='Latitud'
            className='field'
          />
        </div>
        <div className='divInput FormInput-input-55'>
          <Field
            name={source + '.formatted_address'}
            component={renderTextField}
            type='number'
            label='Dirección En formato Google'
            className='field'
          />
        </div>
      </div>
    </div>
  )
}
export default InputSearchPlace
