import './App.css';
import { useState, useEffect, useRef } from 'react';
import CurrentDay from './components/CurrentDay/CurrentDay';
import WeatherCardList from './components/WeatherCardList/WeatherCardList';
import DetailedView from './components/DetailedView/DetailedView';
// default data set for optional use without api calls 
import Data from './onecall.json';
import axios from 'axios';

function App() {
  const detailRef = useRef(null);
  const [locationData, setlocationData] = useState('');
  // initialize to dummy data for use without api keys
  const [weatherData, setWeatherData] = useState(Data);
  const [selected, setSelected] = useState();

  // scroll to the detail view when it is rendered
  const executeScroll = () => detailRef.current.scrollIntoView() 

  const getLocation = (lat, long, key) => {
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&result_type=locality&key=${key}`)
      .then(res => setlocationData(`${res.data.results[0].address_components[0].long_name}, ${res.data.results[0].address_components[3].short_name}, ${res.data.results[0].address_components[4].short_name}`));
  }

  const getWeather = (lat, long, key) => {
    axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=imperial&exclude=minutely&appid=${key}`)
      .then(res => setWeatherData(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    // check if api keys setup (this will determine if the data used will be live or be dummy snapshot data)
    if (process.env.REACT_APP_WEATHER_API_KEY && process.env.REACT_APP_MAPS_API_KEY) {
      // if api keys are being used, ask for location permissions from user
      navigator.geolocation.getCurrentPosition(res => {
        // If location permission granted: get weather from their location
        getLocation(res.coords.latitude, res.coords.longitude, process.env.REACT_APP_MAPS_API_KEY);
        getWeather(res.coords.latitude, res.coords.longitude, process.env.REACT_APP_WEATHER_API_KEY);
      }, ()=> {
        // If location permission denied: get weather from the api example (Texarkana, AR, US)
        getLocation(33.441792, -94.037689, process.env.REACT_APP_MAPS_API_KEY);
        getWeather(33.441792, -94.037689, process.env.REACT_APP_WEATHER_API_KEY);
      })
    } else {
      // if api keys not setup, continue to use the snapshot dummy data
      setlocationData('Texarkana, AR, US (snapshot data)')
    }
  }, [])

  return (
    <div className="App">
      <CurrentDay 
        currentData={weatherData.current} 
        hourlyArray={weatherData.hourly.slice(0, 25)} 
        locationData={locationData} 
      />
      <WeatherCardList 
        weatherArray={weatherData.daily} 
        selected={selected} 
        setSelected={setSelected} 
      />
      <div ref={detailRef}>
        {selected >= 0 ? 
          <DetailedView  executeScroll={executeScroll} index={selected} data={weatherData.daily[selected]}/> : null
        }
      </div>
    </div>
  );
}

export default App;
