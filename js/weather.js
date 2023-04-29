const API_KEY = config.apikey;

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weatherIcon = document.querySelector("#weather img")
            const weather = document.getElementById("weather_temp")
            const city = document.getElementById("weather_info")
            const temp = data.main.temp.toFixed(1)
            weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            city.innerText = `${data.name} / ${data.weather[0].main}`;
            weather.innerText = `${temp}\u2103`;
        });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);