import React, { useState } from "react";
import axios from "axios";
import { MagnifyingGlass } from "react-loader-spinner";
import Alert from "./Alert";
import Select from 'react-select';
import { Link } from 'react-router-dom'; // Import Link
import './Weather.css';

function Weather() {
  
  const API_KEY = '21571e236ae1e7500c50aabca16ad13c';

  const [data, setData] = useState('');
  const [location, setLocation] = useState('');
  const [unit, setUnit] = useState('metric');
  const [symbol, setSymbol] = useState('°C');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleUnitChange = (selectedOption) => {
    setUnit(selectedOption.value);
    setSymbol(selectedOption.value === 'metric' ? '°C' : '°F');
    setData(null);
  };

  const unitOptions = [
    { value: 'metric', label: 'Celsius (°C)' },
    { value: 'imperial', label: 'Fahrenheit (°F)' },
  ];

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=${unit}`;

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      setIsLoading(true);
      axios.get(url).then(response => {
        setData(response?.data);
      })
        .catch((error) => {
          setError(error.response?.data?.message || 'An error occurred');
          setData(null);
        })
        .finally(() => {
          setIsLoading(false);
          setLocation('');
          setTimeout(() => {
            setError(null);
          }, 3000);
        });
    }
  };

  return (
    <div className="weather">
      {isLoading && (
        <div className="loading-spinner">
          <MagnifyingGlass visible={true} height={80} width={80} 
            ariaLabel="MagnifyingGlass-loading"
            glassColor="#bbc1c3"
            color="#394c54"
          />
        </div>
      )}
      {error && (
        <Alert
          message={error}
          type="error"
          onClose={() => setError(null)}
        />
      )}
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Search Location"
          type="text"
        />
      </div>

      <div className="date">
        <p> {new Date().toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
      </div>

      {data ?
        <div className="container">
          <div className="top">
            <div className='location'>
              <p>{data.name}</p>
            </div>
            <div className="temp">
              <h1>{data.main.temp.toFixed()}{symbol}</h1>
              <div className="icon">
                <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt="Weather Icon" />
              </div>
            </div>

            <div className="description">
              <h2>{data.weather[0].main}</h2> :
            </div>
          </div>
          <div className="bottom">
            <div className="feels">
              <p className="bold">{data.main.feels_like.toFixed()}{symbol}</p>
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              <p className="bold">{data.main.humidity}%</p>
              <p>Humidity</p>
            </div>
            <div className="temp_max">
              <p className="bold">{data.main.temp_max.toFixed()}{symbol}</p>
              <p>Max Temp</p>
            </div>
            <div className="wind">
              <p className="bold">{data.wind.speed.toFixed()}m/s</p>
              <p>Wind Speed</p>
            </div>
          </div>
        </div>
      : null}

      <div className="unit-dropdown">
        <Select
          options={unitOptions}
          value={unitOptions.find(option => option.value === unit)}
          onChange={handleUnitChange}
          className="custom-select"
          styles={{
            control: provided => ({
              ...provided,
              backgroundColor: "rgba(0,0,0,0.1)",
              border: "1px solid rgba(255, 255, 255, 0.8)",
              borderRadius: "25px",
              padding: ".2rem .5rem",
            }),
            option: (provided, state) => ({
              ...provided,
              backgroundColor:"white",
              color: "black",
            }), singleValue: (provided) => ({
              ...provided,
              color: "#ffffff",
            })
          }}
        />
      </div>

      <button>
      <Link to="/" className="button">Home</Link>
      </button>
      
    </div>
  );
}

export default Weather;
