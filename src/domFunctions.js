
const getWeatherFromDOM = (function () {

    const weatherIcon = document.getElementById('weather-icon');
    const condition = document.getElementById('condition');
    const city = document.getElementById('city');
    const temperature = document.getElementById('temperature');
    const temperatureUnits = document.querySelectorAll('.temperature-unit');
    const feelsLikeTemperature = document.getElementById('feels-like-temperature');
    const wind = document.getElementById('wind');
    const humidity = document.getElementById('humidity');

    return {
        weatherIcon,
        condition,
        city,
        temperature,
        temperatureUnits,
        feelsLikeTemperature,
        wind,
        humidity
    };

})();

function getCountry(country) {
    let arr = country.split("/");
    return arr[0];
}

export function setWeatherOnDOM(condition, country, city, temperature, feelsLikeTemperature, wind, humidity) {

    setWeatherIconOnDOM(condition);
    getWeatherFromDOM.condition.textContent = condition;
    getWeatherFromDOM.city.textContent = `${city}, ${getCountry(country)}`;
    getWeatherFromDOM.temperature.textContent = temperature;
    getWeatherFromDOM.feelsLikeTemperature.textContent = `Feels like: ${feelsLikeTemperature}`;
    getWeatherFromDOM.wind.textContent = `Wind: ${wind}KPH`;
    getWeatherFromDOM.humidity.textContent = `Humidity: ${humidity}%`;

}

function setWeatherIconOnDOM(condition) {

    switch (condition) {

        case "Sunny":
        case "Clear":
            getWeatherFromDOM.weatherIcon.src = require("./images/sunny.svg");
            getWeatherFromDOM.weatherIcon.style.width = "280px";
            break;

        case "Partly cloudy":
            getWeatherFromDOM.weatherIcon.src = require("./images/cloudy_house.svg");
            getWeatherFromDOM.weatherIcon.style.width = "280px";
            break;

        case "Cloudy":
        case "Overcast":
        case "Mist":
            getWeatherFromDOM.weatherIcon.src = require("./images/partly_cloudy1.svg");
            getWeatherFromDOM.weatherIcon.style.width = "280px";
            break;

        case "Blowing snow":
            getWeatherFromDOM.weatherIcon.src = require("./images/windy.svg");
            getWeatherFromDOM.weatherIcon.style.width = "280px";
            break;

        case "Patchy rain possible":
        case "Patchy light drizzle":
        case "Light drizzle":
        case "Freezing drizzle":
        case "Heavy freezing drizzle":
        case "Patchy light rain":
        case "Light rain":
        case "Moderate rain at times":
        case "Moderate rain":
        case "Heavy rain at times":
        case "Heavy rain":
        case "Light freezing rain":
        case "Moderate or heavy freezing rain":
        case "Light rain shower":
        case "Moderate or heavy rain shower":
        case "Torrential rain shower":
            getWeatherFromDOM.weatherIcon.src = require("./images/Rain.svg");
            getWeatherFromDOM.weatherIcon.style.width = "250px";
            break;

        case "Thundery outbreaks possible":
        case "Patchy light rain with thunder":
        case "Moderate or heavy rain with thunder":
        case "Patchy light snow with thunder":
        case "Moderate or heavy snow with thunder":
            getWeatherFromDOM.weatherIcon.src = require("./images/thunder.svg");
            getWeatherFromDOM.weatherIcon.style.width = "280px";
            break;

        case "Patchy sleet possible":
        case "Patchy freezing drizzle possible":
        case "Blowing snow":
        case "Blizzard":
        case "Light sleet":
        case "Moderate or heavy sleet":
        case "Patchy light snow":
        case "Light snow":
        case "Patchy moderate snow":
        case "Moderate snow":
        case "Patchy heavy snow":
        case "Heavy snow":
        case "Ice pellets":
        case "Light sleet showers":
        case "Moderate or heavy sleet showers":
        case "Light snow showers":
        case "Moderate or heavy snow showers":
        case "Light showers of ice pellets":
        case "Moderate or heavy showers of ice pellets":
            getWeatherFromDOM.weatherIcon.src = require("./images/snowy.svg");
            getWeatherFromDOM.weatherIcon.style.width = "250px";
            break;

    }
}