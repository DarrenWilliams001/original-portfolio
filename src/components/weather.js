import React, { useState, useEffect } from "react"
import axios from "axios"

const Weather = () => {
  const [currentTemp, setCurrentTemp] = useState(0)
  const [tempIcon, setTempIcon] = useState()

  const getWeather = async () => {
    try {
      await axios
        .get(
          "https://api.weatherstack.com/current?access_key=bc09fbad52a3794a460accef89d6377b&query=Mooroolbark"
        )
        .then(function (response) {
          console.log(response.data.current)
          setCurrentTemp(response.data.current.temperature)
          setTempIcon(response.data.current.weather_icons[0])
        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
    } finally {
    }
  }

  useEffect(() => {
    getWeather()

    const interval = setInterval(() => {
      getWeather()
    }, 300000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      style={{ display: `flex`, alignItems: `center`, justifyContent: `end` }}
    >
      <h6
        style={{
          textTransform: `uppercase`,
          margin: `0 10px`,
          color: `#3772ff`,
        }}
      >
        Melbourne, VIC
      </h6>
      <h6 style={{ fontSize: `18px` }}>{currentTemp}°</h6>
      <img style={{ width: `30px`, margin: `0 10px` }} src={tempIcon} />
    </div>
  )
}

export default Weather
