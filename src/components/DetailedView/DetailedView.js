import { useEffect } from 'react';

import { formatTimeString } from '../../utility/formatTime';
import { mapToDay, mapToMonth } from '../../utility/dateMap';
import { calculateUvi } from '../../utility/calculateUviRating';

// Images
import classes from './DetailedView.module.css';
import Sunrise from '../../assets/img/weather/sunrise.png';
import Sunset from '../../assets/img/weather/sunset.png';
import Wind from '../../assets/img/weather/wind.png';
import Rain from '../../assets/img/weather/rain.png';
import Humidity from '../../assets/img/weather/humidity.png';
import Sun from '../../assets/img/weather/sun.png';


const DetailedView = props => {
  const date = new Date(props.data.dt * 1000);
  const sunriseTime = formatTimeString(props.data.sunrise);
  const sunsetTime = formatTimeString(props.data.sunset);
  const uviRating = calculateUvi(props.data.uvi);

  // Scroll when detailed view appears
  const { executeScroll } = props;
  useEffect(() => {
    executeScroll()
  }, [executeScroll])

  // Assign styles based on uv index
  let uviClass = '';
  switch (uviRating) {
    case "Low":
      uviClass = classes.Low
      break;
    case "Moderate":
      uviClass = classes.Moderate
      break;
    case "High":
      uviClass = classes.High
      break;
    case "Very High":
      uviClass = classes.VeryHigh
      break;
    case "Extreme":
      uviClass = classes.Extreme
      break;
    default:
      uviClass = classes.Low
      break;
  }

  return (
    <div className={classes.DetailedView}>
      <h2 className={classes.Date}>Details for {mapToDay(date.getDay())}, {mapToMonth(date.getMonth())} {date.getDate()} {date.getFullYear()}</h2>
      <div className={classes.InfoContainer}>
        <div className={classes.InfoSquare}>
          <img src={Sunrise} alt="Sunrise"/>
          <p>Sunrise</p>
          <p>{sunriseTime}</p>
        </div>
        <div className={classes.InfoSquare}>
          <img src={Sunset} alt="Sunset"/>
          <p>Sunset</p>
          <p>{sunsetTime}</p>
        </div>
        <div className={classes.InfoSquare}>
          <img src={Wind} alt="Wind"/>
          <p>Wind Speed</p>
          <p>{props.data.wind_speed.toFixed(1)} mph</p>
        </div>
        <div className={classes.InfoSquare}>
          <img src={Rain} alt="Rain"/>
          <p>Precipitation</p>
          <p>{Math.floor(props.data.pop * 100)}&#37;</p>
        </div>
        <div className={classes.InfoSquare}>
          <img src={Humidity} alt="Humidity"/>
          <p>Humidity</p>
          <p>{props.data.humidity}&#37;</p>
        </div>
        <div className={classes.InfoSquare}>
          <img src={Sun} alt="Sun"/>
          <p>UV Index</p>
          <p>
            <span className={uviClass}>{uviRating}</span> 
            <span className={classes.UviRating}>({Math.round(props.data.uvi)})</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default DetailedView;