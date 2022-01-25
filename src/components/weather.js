import React, { useState, useEffect } from "react"
import axios from "axios"

const Weather = () => {
  const [currentTemp, setCurrentTemp] = useState(0)

  const getWeather = async () => {
    try {
      await axios
        .get(
          "https://api.openweathermap.org/data/2.5/weather?q=mooroolbark&appid=3838b5e28e6c9af238ec2418671d54fe&units=metric"
        )
        .then(function (response) {
          setCurrentTemp(response.data.main.temp)
        })
        .catch(function (error) {})
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
      style={{
        display: `flex`,
        alignItems: `center`,
        justifyContent: `end`,
        borderRight: `solid 2px #1a1b1f70`,
        paddingRight: `20px`,
      }}
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
      <h6>{currentTemp}°C</h6>
    </div>
  )
}

export default Weather
