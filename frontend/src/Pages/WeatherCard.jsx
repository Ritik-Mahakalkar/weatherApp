import React from 'react';
import './WeatherCard.css'
const WeatherCard = ({ weather }) => {
  return (
    <div className="weather-card">
    <div className="card-body">
      <h3 className="card-title">{weather.name}</h3>
      <h4 className="temperature">{weather.main.temp}°C</h4>
      <p className="description">{weather.weather[0].description}</p>
      <p className="wind"> Wind Speed: {weather.wind.speed} m/s</p>
    </div>
  </div>
  
  );
};

export default WeatherCard;
