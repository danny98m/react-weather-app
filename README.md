# weather-forecast
This is a weather forecast application built with React. It utilizes the [openweathermap api](https://openweathermap.org) 
and the google maps reverse geocoding api to gather weather data based on the user's current location. Both of these apis cost money
to continuously use so the demo deployment does not have these features but instead uses a snapshot of data I took from Texarkana, Arkansas 
at sometime in early February 2021 (found inside ```./src/onecall.json```). To use these api features, clone this repo and add your keys in a ```.env``` file within ```./src```. 
Do not publish your code with the api keys in the ```.env``` file though as this will expose your api keys.

## Features
The app shows the current weather, a 24 hour weather overview with horizontal scrolling, an 8 day (including current day) weather forecast, ability to click on these forecast cards to view more details about each coming day, and a chart showing the change in temperature over a 48 hour period.

## To Run
```npm install```

```npm start```

If you want to utilize the api functionality instead of just snapshot data within ```./src/onecall.json``` add your api keys to a ```./src/.env``` file
and follow the formatting shown in ```App.js``` where the api keys are utilized.
Granting location services to the browser will give you the weather data of your current location, denying access to your location will show weather data in 
Texarkana, Arkansas.

## Demo Deployment with Fake Data
https://lucid-thompson-e90ea5.netlify.app
