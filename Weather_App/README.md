# Weather App 🌦️

A weather lookup app that displays current conditions for any city using a live weather API.

## Features
- Search for weather by city name
- Displays temperature (°C), weather description, humidity, and wind speed
- Shows an error message when a city isn't found
- Fetches real-time data from the [OpenWeatherMap API](https://openweathermap.org/api)

## Tech Stack
- HTML5
- CSS3
- JavaScript (Vanilla) with the Fetch API

## How to Run
1. Clone or download this folder.
2. Open `index.html` in your browser (requires an internet connection).
3. Enter a city name and click **Search**.

> **Security note:** `script.js` currently contains a hardcoded OpenWeatherMap API key. Since this is a public repository, consider regenerating that key and loading it from an environment variable or a `.gitignore`'d config file instead of committing it directly.

## File Structure
```
Weather_App/
├── index.html
├── style.css
└── script.js
```