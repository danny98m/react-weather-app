import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { formatTimeString } from '../../utility/formatTime';
import { calculateUvi } from '../../utility/calculateUviRating';
import { formatDate } from '../../utility/formatDate';

// Images
import classes from './DetailedView.module.css';
import Sunrise from '../../assets/img/weather/sunrise.png';
import Sunset from '../../assets/img/weather/sunset.png';
import Wind from '../../assets/img/weather/wind.png';
import Rain from '../../assets/img/weather/rain.png';
import Humidity from '../../assets/img/weather/humidity.png';
import Sun from '../../assets/img/weather/sun.png';

const DetailedView = ({
  executeScroll,
  data,
  tz,
}) => {
  const sunriseTime = formatTimeString(data.sunrise);
  const sunsetTime = formatTimeString(data.sunset);
  const uviRating = calculateUvi(data.uvi);
  const dateFull = formatDate(data.dt, tz, 'DATE_FULL');

  // Scroll when detailed view appears
  useEffect(() => {
    executeScroll();
  }, [executeScroll]);

  // Assign styles based on uv index
  let uviClass = '';
  switch (uviRating) {
    case 'Low':
      uviClass = classes.Low;
      break;
    case 'Moderate':
      uviClass = classes.Moderate;
      break;
    case 'High':
      uviClass = classes.High;
      break;
    case 'Very High':
      uviClass = classes.VeryHigh;
      break;
    case 'Extreme':
      uviClass = classes.Extreme;
      break;
    default:
      uviClass = classes.Low;
      break;
  }

  return (
    <div className={classes.DetailedView}>
      <h2 className={classes.Date}>
        Details for
        {' '}
        {dateFull}
      </h2>
      <div className={classes.InfoContainer}>
        <div className={classes.InfoSquare}>
          <img src={Sunrise} alt="Sunrise" />
          <p>Sunrise</p>
          <p>{sunriseTime}</p>
        </div>
        <div className={classes.InfoSquare}>
          <img src={Sunset} alt="Sunset" />
          <p>Sunset</p>
          <p>{sunsetTime}</p>
        </div>
        <div className={classes.InfoSquare}>
          <img src={Wind} alt="Wind" />
          <p>Wind Speed</p>
          <p>
            {data.wind_speed.toFixed(1)}
            {' '}
            mph
          </p>
        </div>
        <div className={classes.InfoSquare}>
          <img src={Rain} alt="Rain" />
          <p>Precipitation</p>
          <p>
            {Math.floor(data.pop * 100)}
            &#37;
          </p>
        </div>
        <div className={classes.InfoSquare}>
          <img src={Humidity} alt="Humidity" />
          <p>Humidity</p>
          <p>
            {data.humidity}
            &#37;
          </p>
        </div>
        <div className={classes.InfoSquare}>
          <img src={Sun} alt="Sun" />
          <p>UV Index</p>
          <p>
            <span className={uviClass}>{uviRating}</span>
            <span className={classes.UviRating}>
              &#40;
              {Math.round(data.uvi)}
              &#41;
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

DetailedView.propTypes = {
  executeScroll: PropTypes.func.isRequired,
  data: PropTypes.instanceOf(PropTypes.object).isRequired,
  tz: PropTypes.string.isRequired,
};

export default DetailedView;
