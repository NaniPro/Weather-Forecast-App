let weather = {
    "apiKey": "6643cf288df3fd05d8cf5af3985e6938",
    fetchWeather : async function(city_name, limit, API_key) {
        fetch(
            `http://api.openweathermap.org/geo/1.0/direct?q=${city_name}&limit=${limit}&appid=${API_key}`
        ).then((Response) => Response.json()).then((data) => fetch(`https://api.open-meteo.com/v1/forecast?latitude=${data[0].lat}&longitude=${data[0].lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,rain,weather_code,wind_direction_10m`).then(
            (Response) => Response.json()).then(
                 (data) => {
                        cityTemp.innerText = "Temperature: " +data.current.temperature_2m + "°"
                        console.log(data)
                        
                        windSpeed.innerText = "Wind Speed: " + data.current.wind_speed_10m + " Km/h."
                        
                        
                        weatherCode = parseInt(data.current.wind_speed_10m)
                        
                        if (weatherCode <= 19){
                            weatherState.innerText = "Weather State: Mist."
                        }
                        else if(weatherCode>=20 && weatherCode<=29) {
                            weatherState.innerText = "Weather State: Shower(s) of rain."

                        }
                        else if (weatherCode>=30 && weatherCode<=39){
                            weatherState.innerText = "Weather State: Slight or moderate blowing snow Or Severe duststorm or sandstorm."
                        }
                        else if (weatherCode>=40 && weatherCode<=49){
                            weatherState.innerText = "Weather State: Fog or ice fog, sky invisible"
                        }
                        else if (weatherCode>=50 && weatherCode<=59){
                            weatherState.innerText = "Weather State: Drizzle, not freezing, continuous"
                        }
                        else if (weatherCode>=60 && weatherCode<=69) {
                            weatherState.innerText = "Weather State: Rain, not freezing, continuous"
                        }
                        else if (weatherCode>=70 && weatherCode<=79) {
                            weatherState.innerText = "Weather State: Continuous fall of snowflakes"
                        }
                        else if (weatherCode>=80 && weatherCode<=89) {
                            weatherState.innerText = "Weather State: Snow shower(s), slight"
                        }
                        else if (weatherCode>=90 && weatherCode<=99) {
                            weatherState.innerText = "Weather State: Thunderstorm, slight or moderate, without hail"
                        }

                        windDir.innerText = "Wind Direction: "+windDir8(data.current.wind_direction_10m)
                        relHumidity.innerText = "Relative Humidity(%): " + data.current.relative_humidity_2m
                        time.innerText = "Time: " + data.current.time

                    }
                        
                        
            ));
    },
}

const cityTemp = document.getElementById('Temp');
const windSpeed = document.getElementById('Wind');
const weatherState = document.getElementById('State');
const windDir = document.getElementById('windDirection');
const relHumidity = document.getElementById('relHumidity');
const time = document.getElementById('Time');
let API_key = weather.apiKey

let city_name = '';
let state_code = 0
let country_code = 0
let limit = 1

let bitchassapi = `http://api.openweathermap.org/geo/1.0/direct?q=${city_name},${state_code},${country_code}&limit=${limit}&appid=${API_key}`
const searchCity = document.getElementById('searchField');
const buttonCity = document.getElementById('citySearch');






buttonCity.addEventListener("click", () => {
    cityName = searchCity.value;
    weather.fetchWeather(cityName, 1, weather.apiKey)
});

function windDir8(deg) {
  const dirs = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  return dirs[Math.round(deg / 45) % 8];
}
