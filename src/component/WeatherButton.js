import React from 'react'
import { Button, Stack } from 'react-bootstrap'

const WeatherButton = ({ cities, setCity }) => {
  return (
    <div className='weather-button'>
      <Stack direction='horizontal' gap={2}>
        <Button variant='warning'>Current Location</Button>

        {cities.map((item, index) => (
          <Button variant='warning' key={index} onClick={() => setCity(item)}>
            {' '}
            {item}
          </Button>
        ))}
      </Stack>
    </div>
  )
}

export default WeatherButton
