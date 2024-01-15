import "./style.css";
import { setWeatherOnDOM } from "./domFunctions";

const input = document.querySelector('input');

document.querySelector('form').addEventListener("submit", (e) => {

    e.preventDefault();

    fetch(`http://api.weatherapi.com/v1/current.json?key=41a6b63eb5a94b4aa4d180152240501&q=${input.value}&aqi=no`, { mode: 'cors' })
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {

            const condition = response.current.condition.text;
            const country = response.location.tz_id;
            const city = response.location.name;
            const temperature = response.current.temp_c;
            const feelsLikeTemperature = response.current.feelslike_c;
            const wind = response.current.wind_kph;
            const humidity = response.current.humidity;

            console.log(response);
            setWeatherOnDOM(condition, country, city, temperature, feelsLikeTemperature, wind, humidity);
        })
        .catch((err) => {
            alert("No matching locations found");
        });
});