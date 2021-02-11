import classes from "./Footer.module.css";

const Footer = props => {
  return (
    <div className={classes.Footer}>
      <p>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
      <p>Weather data retrieved from <a href="https://openweathermap.org/">OpenWeather</a></p>
    </div>
  )
}

export default Footer;