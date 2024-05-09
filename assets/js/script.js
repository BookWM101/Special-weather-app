document, addEventListener('DOMContentLoade', function() {
    const searchBtn = document.getElementById('searchBtn');
    const cityInput = document.getElementById('cityInput');

    searchBtn.addEventListener('click', function() {
        let city = cityInput.value.trim();
        if (city !== '') {
            fetchWeatherData(city);
        } else {
            alert('Please enter a city name.');
        }
    })
});

function fetchWeatherData(dataString) {
    let dataArray = dataString.split(', ');
    dataArray.forEach(item => {
        const [key, value] = item.split(': ');
        weatherData[key.trim()] = value.trim();
    });
    let city = weatherData['City'];
    let state = weatherData['State'];

    console.log('City:', city);
    console.log('State:', state);
}

const tempBtn = document.getElementById('fahrenheit/celsius');
let symbol = document.getElementById('weatherSymbol');
let weather = fetch() //fetch current weather from api//
console.log(weather);
let temp = cel;
let cel = fetch(); //fetch current degrees in celsius from api//
console.log(cel);
let fah = (cel*9.0/5.0)+32.0;
console.log(fah);

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




