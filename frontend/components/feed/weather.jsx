import React from 'react';
import WeatherInfo from './weather_info';

class Weather extends React.Component{
  constructor(){
    super();
    this.state = {
      city: 'San Francisco',
      country: 'US',
      temp: 82,
      tempMax: 91,
      tempMin: 72,
      description: "Update local weather...",
      icon: "03d"
    };
    this.fetchWeatherData = this.fetchWeatherData.bind(this);
  }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition(this.fetchWeatherData);
  }

  fetchWeatherData(e) {
    let url = 'http://api.openweathermap.org/data/2.5/weather?';
    let params = { lat: e.coords.latitude, lon: e.coords.longitude};
    const apiKey = '9c8196bfd427d15981c965438668d3b2';
    url += toQueryString(params);
    url += `&APPID=${apiKey}`;
    url += '&units=imperial';

    let xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = () => {
      if (xmlHttp.status === 200 && xmlHttp.readyState === XMLHttpRequest.DONE) {
        const weatherData = JSON.parse(xmlHttp.responseText);
        this.setState({
          city: weatherData.name,
          country: weatherData.sys.country,
          temp: Math.floor(weatherData.main.temp),
          tempMax: Math.floor(weatherData.main.temp_max),
          tempMin: Math.floor(weatherData.main.temp_min),
          description: weatherData.weather[0]["description"],
          icon: weatherData.weather[0]["icon"],
        });
      }
    };

    xmlHttp.open('GET', url, true);
    xmlHttp.send();
  }

  render() {
    return (
      <WeatherInfo weatherData={this.state}/>
    );
  }
}

const toQueryString = (obj) => {
  let parts = [];
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      parts.push(`${encodeURIComponent(i)}=${encodeURIComponent(obj[i])}`);
    }
  }
  return parts.join('&');
};

const toFahrenheit = (temp) => {

};

export default Weather;
