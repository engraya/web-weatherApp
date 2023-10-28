import React from 'react'
import './WeatherApp.css'
import searchIcon from '../Assets/search.png'
import searchIconWeather from '../Assets/search-icon.png'
import weatherIcon from '../Assets/weather.png'
import rainIcon from '../Assets/rain.png'
import humidityIcon from '../Assets/humidity.png'
import windIcon from '../Assets/wind.png'
import snowIcon from '../Assets/snowman.png'
import cloudIcon from '../Assets/cloud.png'


const WeatherApp = () => {

    let apiKey = 'bdacd8a7aedafe877ddd88b275c780f7'


    let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=London&units=Metric&&appid=bdacd8a7aedafe877ddd88b275c780f7"



  return (
    <>
    <div className='starter'>
    <img src={weatherIcon} alt="" />
    </div>
    <div className='container'>
    <div className="top-bar">
    <input type="text" className="cityInput" placeholder='Search for Cities' />
         
    </div>
    
    <div className="search">
    <div className="search-icon">
        <img src={searchIconWeather} alt="" />
    </div>
    </div>
    <hr />
    <div className="weatherLocation">Tokyo</div>
    <div className="weatherImage">
    <img src={cloudIcon} alt="" />
    </div>
    <div className="weatherTemp">46&#8451;</div>
    <div className="data-container">
        <div className="element">
            <img src={humidityIcon} className='icon' alt=''/>
            <div className="data">
            <div className="text">Humidity Rate</div>
            <div className="humidityPercentage">79%</div>
        </div>
        </div>
        <div className="element">
            <img src={windIcon} className='icon' alt='' />
            <div className="data">
            <div className="text">Wind Speed</div>
            <div className="windRate">45 km/h</div>
        </div>
        </div>
    </div>
    <div className="data-container">
        <div className="element">
            <img src={humidityIcon} className='icon' alt=''/>
            <div className="data">
            <div className="text">Humidity Rate</div>
            <div className="humidityPercentage">79%</div>
        </div>
        </div>
        <div className="element">
            <img src={windIcon} className='icon' alt='' />
            <div className="data">
            <div className="text">Wind Speed</div>
            <div className="windRate">45 km/h</div>
        </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default WeatherApp
