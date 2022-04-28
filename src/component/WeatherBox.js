import React from 'react'

const WeatherBox = ({ weather }) => {
  return (
    <div className='weather-box'>
      <div>
        <h1>{weather?.name}</h1>
      </div>
      <h2>
        {weather?.main.temp} F
        {/* F => C>>>>(({weather?.main.temp}-32)*5/9) C */}
      </h2>
      <h3>{weather?.weather[0].description}</h3>
    </div>
  )
}

export default WeatherBox
