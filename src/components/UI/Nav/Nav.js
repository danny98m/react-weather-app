import classes from './Nav.module.css';
import { NavLink } from 'react-router-dom';


const Nav = props => {
  return (
    <nav className={classes.Nav}>
      <div className={classes.NavContainer}>
        <NavLink exact to="/" activeClassName={classes.Selected}>
          Weather
        </NavLink>
        <NavLink exact to="/chart" activeClassName={classes.Selected}>
          Chart
        </NavLink>
      </div>
    </nav>
  )
}

export default Nav;