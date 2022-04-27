import './App.css'
import { useEffect, useState } from 'react'

// 1. When app is started, it shows weather based on location
// 2. City, C/F degrees, weather information
// 3. 5 buttons: 1(current city) 4(other cities)
// 4. Button clicked, it shows the weather of the city
// 5. Current button clicked, it shows weather of the current one.
// 6. Loading spinner spins when data is loading
function App() {
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude
      let lon = position.coords.longitude
      console.log('current location:', lat, lon)
    })
  }

  useEffect(() => {
    getCurrentLocation()
  }, [])

  return <div>Test~~</div>
}

export default App
