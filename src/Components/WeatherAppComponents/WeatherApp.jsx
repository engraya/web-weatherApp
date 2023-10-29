import React from 'react'
import { useState } from 'react'
import './WeatherApp.css'
import searchIconWeather from '../Assets/search-icon.png'
import weatherIcon from '../Assets/weather.png'
import rainIcon from '../Assets/rain.png'
import humidityIcon from '../Assets/humidity.png'
import windIcon from '../Assets/wind.png'
import snowIcon from '../Assets/snowman.png'
import cloudIcon from '../Assets/cloud.png'
import clearIcon from '../Assets/clear.png'
import drizzleIcon from '../Assets/drizzle2.png'
import pressureIcon from '../Assets/pressure-svgrepo-com.png' 
import visibilityIcon from '../Assets/visibility.png'

const WeatherApp = () => {

    let apiKey = 'bdacd8a7aedafe877ddd88b275c780f7'

    const [weatherDisplayIcon, setWweatherDisplayIcon] = useState(cloudIcon);


    const apiSearchFunc = async () => {

        const cityInputElement = document.getElementsByClassName("cityInput");

        if (cityInputElement[0].value === "") {
            return 0;
        }

        
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInputElement[0].value}&units=Metric&&appid=${apiKey}`

    let response = await fetch(apiUrl);

    let data = await response.json();

    const humidityRate = document.getElementsByClassName("humidityPercentage");
    const windRate = document.getElementsByClassName("windRate");
    const tempretureRate = document.getElementsByClassName("weatherTemp");
    const weatherLocation = document.getElementsByClassName("weatherLocation");
    const weatherCountry = document.getElementsByClassName("weatherCountry");
    const visibilityRate = document.getElementsByClassName("visibilityRate");
    const pressureRate = document.getElementsByClassName("pressureRate");
    const weatherMain = document.getElementsByClassName("weatherMain");
    const weatherDescription = document.getElementsByClassName("weatherDescription")

    humidityRate[0].innerHTML = data.main.humidity + " %";
    windRate[0].innerHTML = data.wind.speed + " km/h";
    tempretureRate[0].innerHTML = data.main.temp + " &#8451 ";
    weatherLocation[0].innerHTML = data.name;
    weatherCountry[0].innerHTML = data.sys.country;
    visibilityRate[0].innerHTML = data.visibility;
    pressureRate[0].innerHTML  = data.main.pressure + "mmHg";
    weatherMain[0].innerHTML = data.weather[0].main;
    weatherDescription[0].innerHTML = data.weather[0].description;



    if(data.weather[0].icon === "o1d" || data.weather[0].icon === "01n") {
        setWweatherDisplayIcon(clearIcon);
    }
    else if(data.weather[0].icon === "o2d" || data.weather[0].icon === "02n") {
        setWweatherDisplayIcon(cloudIcon);
    }
    else if (data.weather[0].icon === "o3d" || data.weather[0].icon === "03n") {
        setWweatherDisplayIcon(drizzleIcon);
    }
    else if (data.weather[0].icon === "o4d" || data.weather[0].icon === "04n") {
        setWweatherDisplayIcon(drizzleIcon);
    }
    else if (data.weather[0].icon === "o9d" || data.weather[0].icon === "09n") {
        setWweatherDisplayIcon(rainIcon);
    }
    else if (data.weather[0].icon === "10d" || data.weather[0].icon === "10n") {
        setWweatherDisplayIcon(rainIcon);
    }
    else if (data.weather[0].icon === "13d" || data.weather[0].icon === "13n") {
        setWweatherDisplayIcon(snowIcon);
    }
    else {
        setWweatherDisplayIcon(clearIcon);
    }
 
}

  return (
    <>
     
    <div className='starter'>
    <h1 className="tittle"><img src={weatherIcon} alt="" />Web weatherApp</h1>
 

    </div>

    <div className='container'>
    <div className="top-bar">
    <input type="text" className="cityInput" placeholder='Enter City Name' />
    </div>
    <div className="search">
    <div className="search-icon">
        <img src={searchIconWeather} alt="" onClick={() => {apiSearchFunc()}} />
    </div>
    </div>
    <hr />
    <div className="weatherLocation">Nguru</div>
    <div className="weatherCountry">( NG )</div>
    <div className="weatherImage">
    <img src={weatherDisplayIcon} alt="" />
    </div>
    <span className='weatherMain'>Clear</span>
    <span className='weatherDescription'>* clear sky</span>
    <div className="weatherTemp"> 32.32&#8451;</div>
    <div className="data-container">
        <div className="element">
            <img src={humidityIcon} className='icon' alt=''/>
            <div className="data">
            <div className="text">Humidity Rate</div>
            <div className="humidityPercentage">79 %</div>
        </div>
        </div>
        <div className="element">
            <img src={windIcon} className='icon' alt='' />
            <div className="data">
            <div className="text">Wind Speed</div>
            <div className="windRate">4.42 km/h</div>
        </div>
        </div>
    </div>
    <div className="data-container">
        <div className="element">
            <img src={pressureIcon} className='icon' alt=''/>
            <div className="data">
            <div className="text">Pressure</div>
            <div className="pressureRate">1007 hPa</div>
        </div>
        </div>
        <div className="element">
            <img src={visibilityIcon} className='icon' alt='' />
            <div className="data">
            <div className="text">Visibility</div>
            <div className="visibilityRate">10000</div>
        </div>
        </div>
    </div>
    </div>
    </>
  )
  }

export default WeatherApp
