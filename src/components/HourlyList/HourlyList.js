import HourCard from '../HourlyList/HourCard/HourCard';
import classes from './HourlyList.module.css';

const HourlyList = props => {
  const hourCards = props.hourlyArray.map((item, index) => (
    <HourCard key={item.dt} hourData={item} index={index} />
  ))

  return (
    <div className={classes.HourlyList}>
      {hourCards}
    </div>
  )
}

export default HourlyList;