// JS Check
console.log('it works');

// Declarations global
const api = 'cdf4e4cb66d336dbea48d94a6940ce7c';
let locationTest = document.querySelector('#location');
let search = document.querySelector('#search');
// let app = document.querySelector('#weatherApp');
let today = new Date();

let country = document.querySelector("#cityCountry");
let time = document.querySelector("#cityTime");
let cloudiness = document.querySelector("#cloudiness");
let cloudDescription = document.querySelector("#cloud");
let humidity = document.querySelector("#humidity");
let pressure = document.querySelector("#pressure");
let sunrise = document.querySelector("#sunrise");
let sunset = document.querySelector("#sunset");
let temp = document.querySelector("#cityTemp");
let tempMin = document.querySelector("#cityTempMin");
let tempMax = document.querySelector("#cityTempMax");
let windSpeed = document.querySelector("#cityWindSpeed");
let windDeg = document.querySelector("#cityWindDef");
let date = document.querySelector("#date");
let cityName = document.querySelector('#name');
let icon = document.querySelector('#icon');
let rain = document.querySelector('#rain');
let coordsLonInput = document.querySelector('#lon');
let coordsLatInput = document.querySelector('#lat');

search.addEventListener('click', (event) => {
    event.preventDefault();
    let locationInput = locationTest.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&units=metric&appid=${api}`;


    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            let nameValue = data['name'];
            let tempValue = data['main']['temp'];
            let tempValueMin = data['main']['temp_min'];
            let tempValueMax = data['main']['temp_max'];
            let descriptionValue = data['weather']['0']['description'];
            let windSpeedInput = data['wind']['speed'];
            let windDegInput = data['wind']['deg'];
            let clouds = data['clouds']['all'];
            // let rainInput = data['rain']['1h'];
            let iconInput = data['weather']['icon'];
            let pressureInput = data['main']['pressure'];
            let humidityInput = data['main']['humidity'];
            let sunriseInput = data['sys']['sunrise'];
            let sunsetInput = data['sys']['sunset'];
            let countryInput= data['sys']['country'];
            let coordsLon= data['coord']['lon'];
            let coordsLat= data['coord']['lat'];


            cityName.innerHTML = nameValue;
            country.innerHTML = countryInput;
            cloudDescription.innerHTML = descriptionValue;
            icon.innerHTML = iconInput;
            // rain.innerHTML = rainInput;
            temp.innerHTML = `${tempValue.toFixed(1)} °C`;
            tempMin.innerHTML = `${tempValueMin.toFixed(1)} °C`;
            tempMax.innerHTML = `${tempValueMax.toFixed(1)} °C`;
            date.innerHTML = `${today.toLocaleTimeString()} ${today.toDateString()}`;
            pressure.innerHTML = `${pressureInput} hpa`;
            humidity.innerHTML = `${humidityInput} %`;
            pressure.innerHTML = `${windSpeedInput} m/s`;
            humidity.innerHTML = `${windDegInput} deg`;

            sunrise.innerHTML = new Date(sunriseInput).toLocaleTimeString();
            sunset.innerHTML = new Date(sunsetInput).toLocaleTimeString();

            coordsLonInput.innerHTML = coordsLon;
            coordsLatInput.innerHTML = coordsLat;
    });
});
