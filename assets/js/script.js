/* function for the header left */
document, addEventListener('DOMContentLoade', function() {
    const searchBtn = document.getElementById('searchBtn');
    const cityInput = document.getElementById('cityInput');

    searchBtn.addEventListener('click', function() {
        const city = cityInput.value.trim();
        if (city !== '') {
            fetchWeather(city);
        } else {
            alert('Please enter a city name.');
        }
    })
});

function fetchWeather(dataString) {
    const dataArray = dataString.split(', ');
    const weatherData = {};
    dataArray.forEach(item => {
        const [key, value] = item.split(': ');
        weatherData[key.trim()] = value.trim();
    });
    const city = weatherData['City'];
    const state = weatherData['State'];

    console.log('City:', city);
    console.log('State:', state);
}

/* UV Api*/
const apiKey = 'openuv-u9gmcrlvzuztap-io'

fetch('https://api.openuv.io/api/v1/uv?lat=-33.34&lng=115.342', {
    method: 'GET',
    headers: { 
        'x-access-token': apiKey
    }
})
    .then(response => {
        if(!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('UV Index:', data.uv);
        console.log('UV Time:', data.uv_time);
        console.log('UV Max:', data.uv_max);
        console.log('UV Max TIme:', data.uv_max_time);
        console.log('Ozone:', data.ozone);
        console.log('Ozone TIme:', data.ozone_time); /*probably keep the UV information only */
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });


/* function for the nav right */
document.addEventListener('DOMContentLoaded', function() {
    const days = document.querySelectorAll('.day');
    const uvRayElement = document.getElementById('uvRay');
    const pollenElement = document.getElementById('pollen');
    const humidityElement = document.getElementById('humidity');
    const rainElement = document.getElementById('rain');
    const snowElement = document.getElementById('snow');

    console.log(days);
    console.log(uvRayElement);
    console.log(pollenElement);
    console.log(humidityElement);
    console.log(rainElement);
    console.log(snowElement);


    days.forEach(day => {
        day.addEventListener('click', function() {
            const selectedDay = this.dataset.day;
            updateWeatherData(selectedDay);
        });
    });
});


/* function for section(the entire week/basic information) */
function updateWeatherData(selectedDay) {
    switch (selectedDay) {
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday' :
        case 'Saturday':
        case 'Sunday' :
    }
   
};

/*function for section(basic information for each day) */
document.addEventListener('DOMContentLoaded', function() {
    const weatherData = [
        {day: 'Monday, '},
        {day: 'Tuesday, '},
        {day: 'Wednesday, '},
        {day: 'Thursday, '},
        {day: 'Friday, '},
        {day: 'Saturday, '},
        {day: 'Sunday, '},
    ];

    const forecastSection = document.querySelector('.weather-forecast');

    weatherData.forEach(dayData => {
        const dayForecast = document.createElement('div');
        dayForecast.classList.add('day-forecast');
        
        const dayElement = document.createElement('div');
        dayElement.classList.add('day-forecast');

        const temperatureElement = document.createElement('div');
        temperatureElement.classList.add('temperature');

        const weatherSymbolElement = document.createElement.('div');
        weatherSymbolElement.classList.add('weather-symbol');

        dayForecast.appendChild(dayElement);
        dayForecast.appendChild(temperatureElement);
        dayForecast.appendChild(weatherSymbolElement);

        forecastSection.appendChild(dayForecast);

        // Fetch temperature data for each day from the weather API(write the weather api here) */

        const weatherSymbol = getWeatherSymbol(temperature);
        weatherSymbolElement.textContent = weatherSymbol;

        console.log('Temperature for ${dayData.day}; ${temperature} ') /*need to maybe redo after finishing java, making sure everyday will change their f to c , c to f */
        console.log(`Weather symbol for ${dayData.day}: ${weatherSymbol}`);
    })
    .catch(error => {
        console.error('Error fetching temperature:', error);
})
        console.log(forecastSection);
});


const tempBtn = document.getElementById('fahrenheit/celsius');
let symbol = document.getElementById('weatherSymbol');
let weather = fetch() //fetch current weather from api//
let temp = cel;
let cel = fetch(); //fetch current degrees in celsius from api//
let fah = (cel*9.0/5.0)+32.0;

function tempChange () {
    if (temp == cel) {
        temp = fah }
        else {
            temp = cel
        }
        return
}

tempBtn.addEventListener('click', tempChange);

function changeSymbol () {
if (temp < 32) {
    symbol.attributes('src') == "./assets/images.snow-flake.webp";
    }
    else if (weather = sunny) {
        symbol.attributes('src') == "./assets/images.sunny.jpg";
    }
    else if (weather = stormy) {
        symbol.attributes('src') == "./assets/images.storms.jpg";
    }
    else if (weather = cloudy) {
        symbol.attributes('src') == "./assets/images.cloudy.png";
    }
    return
}




