import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import HourlyList from '../HourlyList/HourlyList';
import classes from './CurrentDay.module.css';
import { formatTimeString } from '../../utility/formatTime';
import { formatDate } from '../../utility/formatDate';

const CurrentDay = ({
  currentData,
  hourlyArray,
  locationData,
  tz,
}) => {
  const timeString = formatTimeString(currentData.dt, tz);
  const weekday = formatDate(currentData.dt, tz, 'weekdayLong');

  return (
    <>
      <div className={classes.CurrentDay}>
        <h1>{locationData}</h1>
        <h2 className={classes.Day}>
          {weekday}
          &nbsp;
          {timeString}
        </h2>
        <h2 className={classes.CurrentTemp}>
          {Math.round(currentData.temp)}
          &deg;
        </h2>
        <div className={classes.Grid}>
          <div>
            <h3>Feels</h3>
            <h3>
              {Math.round(currentData.feels_like)}
              &deg;
            </h3>
          </div>
          <div className={classes.WeatherImage}>
            <img src={`http://openweathermap.org/img/wn/${currentData.weather[0].icon}@4x.png`} alt={currentData.weather[0].description} />
            <h3>{currentData.weather[0].description}</h3>
          </div>
          <div>
            <h3>Humidity</h3>
            <h3>
              {currentData.humidity}
              &#37;
            </h3>
          </div>
        </div>
      </div>
      <HourlyList hourlyArray={hourlyArray} tz={tz} />
    </>
  );
};

CurrentDay.propTypes = {
  currentData: PropTypes.instanceOf(PropTypes.object).isRequired,
  hourlyArray: PropTypes.arrayOf(PropTypes.object).isRequired,
  locationData: PropTypes.string.isRequired,
  tz: PropTypes.string.isRequired,
};

export default CurrentDay;
