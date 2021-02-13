import React from 'react';
import PropTypes from 'prop-types';
import formatDate from '../../../utility/formatDate';
import classes from './WeatherCard.module.css';

const WeatherCard = ({
  data,
  changeSelected,
  index,
  selectedIndex,
  tz,
}) => {
  // determine if card needs to be shown as 'selected'
  const mainClasses = [classes.WeatherCard];
  if (index === selectedIndex) {
    mainClasses.push(classes.SelectedBorder);
  }

  const weekdayShort = formatDate(data.dt, tz, 'weekdayShort');

  return (
    <div role="button" tabIndex={index} className={mainClasses.join(' ')} onClick={() => changeSelected(index)}>
      <h2 className={classes.Day}>{weekdayShort}</h2>
      <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="Weather Icon" />
      <p className={classes.Current}>
        {Math.round(data.temp.day)}
        &deg;
      </p>
      <div className={classes.MinMax}>
        <p className={classes.Max}>
          {Math.round(data.temp.max)}
          &deg;
        </p>
        <p className={classes.Min}>
          {Math.round(data.temp.min)}
          &deg;
        </p>
      </div>
    </div>
  );
};

WeatherCard.propTypes = {
  data: PropTypes.instanceOf(PropTypes.object).isRequired,
  changeSelected: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  selectedIndex: PropTypes.number.isRequired,
  tz: PropTypes.string.isRequired,
};

export default WeatherCard;
