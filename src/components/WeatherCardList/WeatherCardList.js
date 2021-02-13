import React from 'react';
import PropTypes from 'prop-types';
import WeatherCard from './WeatherCard/WeatherCard';
import classes from './WeatherCardList.module.css';

const WeatherCardList = ({
  weatherArray,
  selected,
  setSelected,
  tz,
}) => {
  const changeSelected = (index) => {
    // if the weathercard clicked was already in the active state, deactivate it
    if (index === selected) {
      setSelected(-1);
    } else {
      // set given weathercard to active state
      setSelected(index);
    }
  };

  const weatherForecast = weatherArray.map((item, index) => (
    <WeatherCard
      key={item.dt}
      data={item}
      changeSelected={changeSelected}
      index={index}
      selectedIndex={selected}
      tz={tz}
    />
  ));

  return (
    <div className={classes.WeatherCardList}>
      {weatherForecast}
    </div>
  );
};

WeatherCardList.propTypes = {
  weatherArray: PropTypes.instanceOf(PropTypes.array).isRequired,
  selected: PropTypes.number.isRequired,
  setSelected: PropTypes.func.isRequired,
  tz: PropTypes.string.isRequired,
};

export default WeatherCardList;
