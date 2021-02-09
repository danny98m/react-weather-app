import WeatherCard from './WeatherCard/WeatherCard';
import classes from './WeatherCardList.module.css';

const WeatherCardList = props => {
  const changeSelected = index => {
    // if the weathercard clicked was already in the active state, deactivate it
    if (index === props.selected) {
      props.setSelected(-1)
    } else {
      // set given weathercard to active state
      props.setSelected(index);
    }
  }

  const weatherForecast = props.weatherArray.map((item, index) => (
    <WeatherCard 
      key={item.dt} 
      data={item} 
      changeSelected={changeSelected} 
      index={index} 
      selectedIndex={props.selected} 
      tz={props.tz}
    />
  ))

  return (
    <div className={classes.WeatherCardList}>
      {weatherForecast}
    </div>
  )
}

export default WeatherCardList;