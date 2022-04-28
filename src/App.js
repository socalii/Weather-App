import { useEffect, useState } from 'react'
import './App.css'
import WeatherBox from './component/WeatherBox'
import WeatherButton from './component/WeatherButton'
import 'bootstrap/dist/css/bootstrap.min.css'

// 1. When app is started, it shows weather based on location
// 2. City, C/F degrees, weather information
// 3. 5 buttons: 1(current city) 4(other cities)
// 4. Button clicked, it shows the weather of the city
// 5. Current button clicked, it shows weather of the current one.
// 6. Loading spinner spins when data is loading
function App() {
  const [weather, setWeather] = useState(null)

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude
      let lon = position.coords.longitude
      getWeatherByCurrentLocation(lat, lon)
    })
  }

  // API 호출
  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=70e579afc93f5ed072876a3cb0000ca1&units=imperial`
    let response = await fetch(url)
    let data = await response.json()
    setWeather(data)
  }

  useEffect(() => {
    getCurrentLocation()
  }, [])

  return (
    <div>
      <div className='container'>
        <WeatherBox weather={weather} />
        <WeatherButton />
      </div>
    </div>
  )
}

export default App
