import { useEffect, useState } from 'react'
import './App.css'
import { Container } from 'react-bootstrap'
import WeatherBox from './component/WeatherBox'
import WeatherButton from './component/WeatherButton'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ClipLoader } from 'react-spinners/ClipLoader'

// 1. When app is started, it shows weather based on location
// 2. City, C/F degrees, weather information
// 3. 5 buttons: 1(current city) 4(other cities)
// 4. Button clicked, it shows the weather of the city
// 5. Current button clicked, it shows weather of the current one.
// 6. Loading spinner spins when data is loading

const API_KEY = '70e579afc93f5ed072876a3cb0000ca1'
const cities = ['Paris', 'New York', 'Tokyo', 'Seoul']

function App() {
  const [weather, setWeather] = useState(null)
  const [city, setCity] = useState('')

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude
      let lon = position.coords.longitude
      getWeatherByCurrentLocation(lat, lon)
    })
  }

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial`
    let res = await fetch(url)
    let data = await res.json()
    setWeather(data)
  }

  const getWeatherByCity = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`
    let res = await fetch(url)
    let data = await res.json()
    setWeather(data)
  }

  const handleCityChange = (city) => {
    if (city === 'current') {
      setCity('')
    } else {
      setCity(city)
    }
  }

  useEffect(() => {
    if (city == '') {
      getCurrentLocation()
    } else {
      getWeatherByCity()
    }
  }, [city])

  return (
    <div>
      <div className='container'>
        <WeatherBox weather={weather} />
        <WeatherButton
          cities={cities}
          selectedCity={city}
          handleCityChange={handleCityChange}
        />
      </div>
    </div>
  )
}

export default App
