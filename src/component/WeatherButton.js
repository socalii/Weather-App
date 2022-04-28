import React from 'react'
import { Button, Stack } from 'react-bootstrap'

const WeatherButton = ({ cities }) => {
  return (
    <div className='weather-button'>
      <Stack direction='horizontal' gap={2}>
        <Button variant='warning'>Current Location</Button>

        {cities.map((item) => (
          <Button variant='warning'>{item}</Button>
        ))}
      </Stack>
    </div>
  )
}

export default WeatherButton
