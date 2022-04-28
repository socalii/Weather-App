import React from 'react'
import { Button, Stack } from 'react-bootstrap'

const WeatherButton = () => {
  return (
    <div className='weather-button'>
      <Stack direction='horizontal' gap={2}>
        <Button variant='warning'>Current Location</Button>
        <Button variant='warning'>Seoul</Button>
        <Button variant='warning'>New York</Button>
      </Stack>
    </div>
  )
}

export default WeatherButton
