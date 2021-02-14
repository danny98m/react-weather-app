import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Nav.module.css';

const Nav = () => (
  <nav className={classes.Nav}>
    <div className={classes.NavContainer}>
      <NavLink exact to="/weather-forecast" activeClassName={classes.Selected}>
        Weather
      </NavLink>
      <NavLink exact to="/chart" activeClassName={classes.Selected}>
        Chart
      </NavLink>
    </div>
  </nav>
);

export default Nav;
