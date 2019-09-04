import React from 'react';

const WeatherInfo = (props) => {
  let icon = props.weatherData.icon;
  let url = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  return (
    <div className='card'>
      <div className="card-title">
        <div className="left-icon weather"></div>
        <span>{props.weatherData.city}, {props.weatherData.country}</span>
      </div>
      <div className='weather-body'>
        <div className='weather-show'>
          <img src={url}></img>
          <div className="temp">
            <h1>{props.weatherData.temp}&deg;F</h1>
            <span>H {props.weatherData.tempMax}&deg; L {props.weatherData.tempMin}&deg;</span>
          </div>
        </div>
        <p>{props.weatherData.description}</p>
      </div>
    </div>
  );
};

export default WeatherInfo;
