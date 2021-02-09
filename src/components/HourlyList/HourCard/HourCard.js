import classes from './HourCard.module.css';
import { formatTimeString } from '../../../utility/formatTime';


const HourCard = props => {
  const timeString = formatTimeString(props.hourData.dt);
  const pop = Math.floor(props.hourData.pop * 100);

  return (
    <div className={classes.HourCard}>
      <p className={classes.Time}>{timeString}</p>
      {pop > 0 ? 
        <p>{pop}&#37;</p> : <p>&nbsp;</p>
      }
      <img src={`http://openweathermap.org/img/wn/${props.hourData.weather[0].icon}@2x.png`} alt=""/>
      <p>{Math.round(props.hourData.temp)}&deg;</p>
    </div>
  )
}

export default HourCard;