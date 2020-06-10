import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      temperature: '',
      feels: '',
      humidity: '',
      wind: '',
      icon: ''
    }
  }

  async componentDidMount() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=19f78b32090054a7b186f4a14f9814df", {
      method: "GET"
    }).then(res => res.status >= 300 ? new Error("Fetch error") : res.text())
      .then(res => JSON.parse(res))
      .then(res => this.setState({
        name: res.name,
        temperature: res.main.temp,
        feels: res.main.feels_like,
        humidity: res.main.humidity,
        wind: res.wind.speed,
        icon: res.weather[0].icon
      }));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Welcome to <span>weather-app</span></p>
        </header>
        <main>
          <article>
            <img src={`http://openweathermap.org/img/wn/${this.state.icon}@2x.png`} alt="later"/>
            <h1 className="city-header">{this.state.name}</h1>
            <p>Temperature {Math.floor(this.state.temperature - 273,15)}°</p>
            <p>Feels like {Math.floor(this.state.feels - 273,15)}°</p>
            <p>Humidity: {this.state.humidity} %</p>
            <p>Wind speed: {this.state.wind} m/s</p>
          </article>
          <div className="forecast">
            <article>
              <p>Temperature {Math.floor(this.state.temperature / 10)}°</p>
              <p>Feels like {Math.floor(this.state.feels / 10)}°</p>
              <p>Humidity: {this.state.humidity} %</p>
            </article>
            <article>
              <p>Temperature {Math.floor(this.state.temperature / 10)}°</p>
              <p>Feels like {Math.floor(this.state.feels / 10)}°</p>
              <p>Humidity: {this.state.humidity} %</p>
            </article>
            <article>
              <p>Temperature {Math.floor(this.state.temperature / 10)}°</p>
              <p>Feels like {Math.floor(this.state.feels / 10)}°</p>
              <p>Humidity: {this.state.humidity} %</p>
            </article>
            <article>
              <p>Temperature {Math.floor(this.state.temperature / 10)}°</p>
              <p>Feels like {Math.floor(this.state.feels / 10)}°</p>
              <p>Humidity: {this.state.humidity} %</p>
            </article>
            <article>
              <p>Temperature {Math.floor(this.state.temperature / 10)}°</p>
              <p>Feels like {Math.floor(this.state.feels / 10)}°</p>
              <p>Humidity: {this.state.humidity} %</p>
            </article>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
