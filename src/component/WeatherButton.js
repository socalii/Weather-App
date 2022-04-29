import React from 'react'
import { Button } from 'react-bootstrap'
import Stack from 'react-bootstrap/Stack'

const WeatherButton = ({ cities, selectedCity, handleCityChange }) => {
  return (
    <div className='menu-container'>
      <Stack direction='horizontal' gap={2}>
        <Button
          variant={`${
            selectedCity == null ? 'outline-secondary' : 'secondary'
          }`}
          onClick={() => handleCityChange('current')}
        >
          Current Location
        </Button>

        {cities.map((city, index) => (
          <Button
            variant={`${selectedCity == null ? 'outline-warning' : 'warning'}`}
            key={index}
            onClick={() => handleCityChange(city)}
          >
            {city}
          </Button>
        ))}
      </Stack>
    </div>
  )
}

export default WeatherButton
