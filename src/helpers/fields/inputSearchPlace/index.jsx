import React, { useEffect, useMemo, useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Autocomplete from '@material-ui/lab/Autocomplete'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import parse from 'autosuggest-highlight/parse'
import throttle from 'lodash/throttle'
import { useForm } from 'react-final-form'
import { Field } from 'react-final-form'
import _get from 'lodash/get'

const autocompleteService = { current: null }
const useStyles = makeStyles(theme => ({
  icon: {
    color: theme.palette.text.secondary,
    marginRight: theme.spacing(2)
  },
  button: {
    marginRight: 10,
    marginBottom: 10,
    marginTop: 10
  }
}))

const GoogleMaps = () => {
  const form = useForm()
  const classes = useStyles()
  const [inputValue, setInputValue] = useState('')
  const [options, setOptions] = useState([])

  const handleChange = event => {
    setInputValue(event.target.value)
  }

  const fetch = useMemo(
    () =>
      throttle((input, callback) => {
        const current = _get(autocompleteService, 'current', null)
        if (current) current.getPlacePredictions(input, callback)
      }, 200),
    []
  )

  useEffect(() => {
    let active = true
    if (window.google) {
      if (!autocompleteService.current) {
        autocompleteService.current = new window.google.maps.places.AutocompleteService()
      }
    }

    if (inputValue === '') {
      setOptions([])
      /* return undefined */
    } else {
      fetch({ input: inputValue }, results => {
        if (active) {
          setOptions(results || [])
        }
      })
    }

    return () => {
      active = false
    }
  }, [inputValue, fetch])

  const selectItem = async item => {
    let locationResponse = await geocodeByPlaceId(item.place_id)
    let location = {
      name: item.description,
      lat: locationResponse[0].geometry.location.lat(),
      lng: locationResponse[0].geometry.location.lng()
    }
    form.change('location', location)
  }

  const geocodeByPlaceLocation = LatLng => {
    const geocoder = new window.google.maps.Geocoder()
    const OK = window.google.maps.GeocoderStatus.OK

    return new Promise((resolve, reject) => {
      geocoder.geocode({ location: LatLng }, (results, status) => {
        if (status !== OK) {
          reject(status)
        }
        resolve(results)
      })
    })
  }

  const geocodeByPlaceId = placeId => {
    const geocoder = new window.google.maps.Geocoder()
    const OK = window.google.maps.GeocoderStatus.OK
    return new Promise((resolve, reject) => {
      geocoder.geocode({ placeId }, (results, status) => {
        if (status !== OK) {
          reject(status)
        }
        resolve(results)
      })
    })
  }

  const clear = () => {
    form.change('location', { name: '', lat: '', lng: '' })
    setInputValue('')
  }

  const myLocation = () => {
    let startPos
    const geoOptions = {
      enableHighAccuracy: true
    }

    const geoSuccess = async function(position) {
      startPos = position
      const latlng = new window.google.maps.LatLng(
        startPos.coords.latitude,
        startPos.coords.longitude
      )
      try {
        let locationResponse = await geocodeByPlaceLocation(latlng)

        let location = {
          name: locationResponse[0].formatted_address,
          lat: locationResponse[0].geometry.location.lat(),
          lng: locationResponse[0].geometry.location.lng()
        }
        form.change('location', location)
      } catch (e) {
        console.log('Error occurred. Error : ' + e)
      }
    }
    const geoError = function(error) {
      console.log('Error occurred. Error code: ' + error.code)
    }
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOptions)
  }

  return (
    <div className='inputsLocationMap'>
      <div className='AutocompleteDiv'>
        <Autocomplete
          id='google-map-demo'
          getOptionLabel={option => (typeof option === 'string' ? option : option.description)}
          filterOptions={x => x}
          options={options}
          autoComplete
          includeInputInList
          freeSolo
          disableOpenOnFocus
          renderInput={params => {
            return (
              <TextField
                {...params}
                label='Buscar ubicación'
                fullWidth
                onChange={handleChange}
                className='TextInput inputLocation'
              />
            )
          }}
          renderOption={option => {
            const matches = option.structured_formatting.main_text_matched_substrings
            const parts = parse(
              option.structured_formatting.main_text,
              matches.map(match => [match.offset, match.offset + match.length])
            )

            return (
              <Grid container alignItems='center' onClick={() => selectItem(option)}>
                <Grid item>
                  <LocationOnIcon className={classes.icon} />
                </Grid>
                <Grid item xs>
                  {parts.map((part, index) => (
                    <span key={index} style={{ fontWeight: part.highlight ? 700 : 400 }}>
                      {part.text}
                    </span>
                  ))}

                  <Typography variant='body2' color='textSecondary'>
                    {option.structured_formatting.secondary_text}
                  </Typography>
                </Grid>
              </Grid>
            )
          }}
        />
        <Button variant='contained' color='primary' onClick={clear} className={classes.button}>
          Limpiar
        </Button>
        <Button
          variant='contained'
          color='secondary'
          className={classes.button}
          onClick={myLocation}
        >
          Usar mi ubicación actual
        </Button>
      </div>
      <span className='locationData'>
        <div className='locationPadding MuiInputBase-root MuiFilledInput-root MuiFilledInput-underline MuiInputBase-formControl MuiInputBase-marginDense MuiFilledInput-marginDense'>
          <Field
            name='location.name'
            component='input'
            type='text'
            placeholder='Dirección'
            className=' TextInput MuiInputBase-input MuiFilledInput-input MuiInputBase-inputMarginDense MuiFilledInput-inputMarginDense'
          />
        </div>
        <div className=' locationPadding MuiInputBase-root MuiFilledInput-root MuiFilledInput-underline MuiInputBase-formControl MuiInputBase-marginDense MuiFilledInput-marginDense'>
          <Field
            name='location.lat'
            component='input'
            type='text'
            placeholder='latitude'
            className='TextInput MuiInputBase-input MuiFilledInput-input MuiInputBase-inputMarginDense MuiFilledInput-inputMarginDense'
          />
        </div>
        <div className=' locationPadding MuiInputBase-root MuiFilledInput-root MuiFilledInput-underline MuiInputBase-formControl MuiInputBase-marginDense MuiFilledInput-marginDense'>
          <Field
            name='location.lng'
            component='input'
            type='text'
            placeholder='longitude'
            className='TextInput MuiInputBase-input MuiFilledInput-input MuiInputBase-inputMarginDense MuiFilledInput-inputMarginDense'
          />
        </div>
      </span>
    </div>
  )
}

export default GoogleMaps
