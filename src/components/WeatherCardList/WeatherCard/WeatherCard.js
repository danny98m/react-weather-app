import React from 'react';
import { formatDate } from '../../../utility/formatDate';
import classes from './WeatherCard.module.css';

const WeatherCard = props => {
  // determine if card needs to be shown as 'selected' 
  const mainClasses = [classes.WeatherCard];
  if (props.index === props.selectedIndex) {
    mainClasses.push(classes.SelectedBorder)
  }

  const weekdayShort = formatDate(props.data.dt, props.tz, 'weekdayShort');

  return (
    <div className={mainClasses.join(' ')} onClick={() => props.changeSelected(props.index)}>
      <h2 className={classes.Day}>{weekdayShort}</h2>
      <img src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`} alt=""/>
      <p className={classes.Current}>{Math.round(props.data.temp.day)}&deg;</p>
      <div className={classes.MinMax}>
        <p className={classes.Max}>{Math.round(props.data.temp.max)}&deg;</p>
        <p className={classes.Min}>{Math.round(props.data.temp.min)}&deg;</p>
      </div>
    </div>
  )
}

export default WeatherCard;