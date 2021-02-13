import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';
import CurrentDay from './components/CurrentDay/CurrentDay';
import WeatherCardList from './components/WeatherCardList/WeatherCardList';
import DetailedView from './components/DetailedView/DetailedView';
import Chart from './components/Chart/Chart';
// default data set for optional use without api calls
import Data from './onecall.json';
import { getLocaleInfo } from './utility/getLocaleInfo';

function App() {
  const detailRef = useRef(null);
  const [locationData, setlocationData] = useState('');
  // initialize to dummy data for use without api keys
  const [weatherData, setWeatherData] = useState(Data);
  const [selected, setSelected] = useState();

  // scroll to the detail view when it is rendered
  const executeScroll = () => detailRef.current.scrollIntoView();

  const getLocation = (lat, long, key) => {
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&result_type=locality&key=${key}`)
      .then((res) => setlocationData(`${getLocaleInfo(res.data.results[0].address_components, 'locality', 'long')}, ${getLocaleInfo(res.data.results[0].address_components, 'administrative_area_level_1', 'short')}, ${getLocaleInfo(res.data.results[0].address_components, 'country', 'short')}`));
  };

  const getWeather = (lat, long, key) => {
    axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=imperial&exclude=minutely&appid=${key}`)
      .then((res) => setWeatherData(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    // check if api keys setup
    // this will determine if the data used will be live or be dummy snapshot data
    if (process.env.REACT_APP_WEATHER_API_KEY && process.env.REACT_APP_MAPS_API_KEY) {
      // if api keys are being used, ask for location permissions from user
      navigator.geolocation.getCurrentPosition((res) => {
        const lat = res.coords.latitude;
        const long = res.coords.longitude;
        // If location permission granted: get weather from their location
        getLocation(lat, long, process.env.REACT_APP_MAPS_API_KEY);
        getWeather(lat, long, process.env.REACT_APP_WEATHER_API_KEY);
      }, () => {
        // If location permission denied: get weather from the api example (Texarkana, AR, US)
        getLocation(33.441792, -94.037689, process.env.REACT_APP_MAPS_API_KEY);
        getWeather(33.441792, -94.037689, process.env.REACT_APP_WEATHER_API_KEY);
      });
    } else {
      // if api keys not setup, continue to use the snapshot dummy data
      setlocationData('Texarkana, AR, US (snapshot data)');
    }
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route path="/chart">
          <Chart hourlyTemps={weatherData.hourly} />
        </Route>
        <Route path="/">
          <CurrentDay
            currentData={weatherData.current}
            hourlyArray={weatherData.hourly.slice(0, 25)}
            locationData={locationData}
            tz={weatherData.timezone}
          />
          <WeatherCardList
            weatherArray={weatherData.daily}
            selected={selected}
            setSelected={setSelected}
            tz={weatherData.timezone}
          />
          <div ref={detailRef}>
            {selected >= 0
              ? (
                <DetailedView
                  executeScroll={executeScroll}
                  index={selected}
                  data={weatherData.daily[selected]}
                  tz={weatherData.timezone}
                />
              )
              : null}
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
