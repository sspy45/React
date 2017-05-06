import React from 'react';

class Weather extends React.Component{
  constructor(){
    super();
    this.state = {location: "Hell", weather: "Hot"  }
    this.APIcall = this.APIcall.bind(this);
    this.updateWeather = this.updateWeather.bind(this);
  }

  componentDidMount() {
    let self = this
    function error() {
      console.log("No");
    }
    function success(position){
      let lat  = position.coords.latitude;
      let lon = position.coords.longitude;
      let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7f047f85803edcee0dc04d70bf327488`

      self.APIcall(url, self.updateWeather);
    }
    navigator.geolocation.getCurrentPosition(success, error);

  }

  updateWeather(res){
    this.setState({location: res.name, weather: res.weather[0].main})
  }

  APIcall(url, callback){
    let xmlhttp;

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
            callback(JSON.parse(xmlhttp.responseText));
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
  }

  render() {
    return (
      <div className="weather-widget">
        <h1>Weather</h1>
        <h2>location: {this.state.location}</h2>
        <h2>weather: {this.state.weather}</h2>
      </div>
    )
  }

}

export default Weather;
