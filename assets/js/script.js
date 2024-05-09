
document, addEventListener('DOMContentLoade', function() {
    const searchBtn = document.getElementById('searchBtn');
    const cityInput = document.getElementById('cityInput');

    searchBtn.addEventListener('click', function() {
        const city = cityInput.value.trim();
        if (city !== '') {
            fetchWeatherData(city);
        } else {
            alert('Please enter a city name.');
        }
    })
});

function fetchWeatherData(dataString) {
    const dataArray = dataString.split(', ');
    dataArray.forEach(item => {
        const [key, value] = item.split(': ');
        weatherData[key.trim()] = value.trim();
    });
    const city = weatherData['City'];
    const state = weatherData['State'];

    console.log('City:', city);
    console.log('State:', state);
}

const tempBtn = document.getElementById('fahrenheit/celsius');
let temp = cel;
let cel = fetch();
let fah = (cel*9.0/5.0)+32.0;

function tempChange () {
    if (temp == cel) {
        temp = fah }
        else {
            temp = cel
        }
}

tempBtn.addEventListener('click', tempChange);

