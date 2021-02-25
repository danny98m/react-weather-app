import React from 'react';
import PropTypes, { instanceOf } from 'prop-types';
import classes from './HourCard.module.css';
import formatTimeString from '../../../utility/formatTime';

const HourCard = ({ hourData, tz }) => {
  const timeString = formatTimeString(hourData.dt, tz);
  // percentage of precipitation
  const pop = Math.floor(hourData.pop * 100);

  return (
    <div className={classes.HourCard}>
      <p className={classes.Time}>{timeString}</p>
      {pop > 0
        ? (
          <p>
            {pop}
            &#37;
          </p>
        )
        : <p>&nbsp;</p>}
      <img src={`http://openweathermap.org/img/wn/${hourData.weather[0].icon}@2x.png`} alt="" />
      <p>
        {Math.round(hourData.temp)}
        &deg;
      </p>
    </div>
  );
};

HourCard.propTypes = {
  hourData: instanceOf(PropTypes.object).isRequired,
  tz: PropTypes.string.isRequired,
};

export default HourCard;
