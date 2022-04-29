import React from 'react'

const WeatherBox = ({ weather }) => {
  const tempF = weather && weather.main ? weather.main.temp.toFixed(0) : ''
  const tempC =
    weather && weather.main ? (((tempF - 32) * 5) / 9).toFixed(0) : ''
  const weatherDesc = weather?.weather[0].description.toUpperCase()

  return (
    <div className='weather-box'>
      <div>{weather?.name}</div>
      <h2>{`${tempF} F / ${tempC} C`}</h2>
      <h4>{weatherDesc}</h4>
    </div>
  )
}

export default WeatherBox
