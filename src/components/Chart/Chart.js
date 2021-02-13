import React from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Label,
} from 'recharts';
import PropTypes from 'prop-types';
import classes from './Chart.module.css';
import formatTimeString from '../../utility/formatTime';

const Chart = ({ hourlyTemps, tz }) => {
  const temps = [];
  hourlyTemps.forEach((obj) => {
    temps.push({ time: formatTimeString(obj.dt, tz), temp: obj.temp });
  });

  function formatXAxis(tickItem) {
    // display just HH and AM/PM
    return (
      tickItem.length === 8
        ? tickItem.slice(0, 2).concat(tickItem.slice(tickItem.length - 2, tickItem.length))
        : tickItem.slice(0, 1).concat(tickItem.slice(tickItem.length - 2, tickItem.length))
    );
  }

  return (
    <div className={classes.Chart}>
      <h1>Change in Temperature Over the Next 48 Hours</h1>
      <ResponsiveContainer width="95%" height={500}>
        <LineChart data={temps} margin={{ top: 20, bottom: 20 }}>
          <Line type="monotone" dataKey="temp" stroke="#ef820d" activeDot={{ r: 5 }} />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" strokeOpacity="0.8" />
          <XAxis dataKey="time" tickFormatter={formatXAxis} stroke="#fff" padding={{ left: 10 }}>
            <Label value="Time (HR)" position="centerBottom" dy={20} style={{ fill: '#fff' }} />
          </XAxis>
          <YAxis stroke="#fff">
            <Label angle={-90} value="Temp (F)" position="insideLeft" style={{ textAnchor: 'middle', fill: '#fff' }} />
          </YAxis>
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
      <p><small>For best results, view chart on desktop.</small></p>
    </div>
  );
};

Chart.propTypes = {
  hourlyTemps: PropTypes.arrayOf(PropTypes.object).isRequired,
  tz: PropTypes.string.isRequired,
};

export default Chart;
