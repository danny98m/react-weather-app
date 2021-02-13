import React from 'react';
import PropTypes from 'prop-types';
import HourCard from './HourCard/HourCard';
import classes from './HourlyList.module.css';

const HourlyList = ({ hourlyArray, tz }) => {
  const hourCards = hourlyArray.map((item, index) => (
    <HourCard key={item.dt} hourData={item} index={index} tz={tz} />
  ));

  return (
    <div className={classes.HourlyList}>
      {hourCards}
    </div>
  );
};

HourlyList.propTypes = {
  hourlyArray: PropTypes.instanceOf(PropTypes.array).isRequired,
  tz: PropTypes.string.isRequired,
};

export default HourlyList;
