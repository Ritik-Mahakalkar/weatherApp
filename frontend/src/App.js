import axios from 'axios';
import WeatherCard from './Pages/WeatherCard';
import './App.css';
import { useState } from 'react';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [page , setPage]=useState(false);

  const fetchWeather = async () => {
    setPage(true);
    if (!city) {
      setError('Please enter a city name');
      return;
    }

    try {
      setError('');
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
      );
      setWeather(response.data);
    } catch (err) {
      setWeather(null);
      setError('City not found. Please enter a valid city name.');
    }
  };
  
  if(page){
    return(
      <div>
         {error && <div className="error-msg">{error}</div>}
         {weather && <WeatherCard weather={weather} />}
      </div>

    )

  }

  return (
    <div className="app-container">
    <h2 className="app-title">Weather App</h2>
  
    <div className="search-bar">
      <input
        type="text"
        className="search-input"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button className="search-button" onClick={fetchWeather}>
        🔍
      </button>
    </div>
  
   
  </div>
  
  );
}

export default App;
