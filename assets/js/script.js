document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.getElementById('searchBtn');
    const cityInput = document.getElementById('cityInput');
    const tempBtn = document.getElementById('farenheit/celsius');
    const forecastSection = document.querySelector('.weekForecast');

    // Search button event listener
    searchBtn.addEventListener('click', function() {
        const city = cityInput.value.trim();
        if (city !== '') {
            fetchWeatherData(city);
        } else {
            alert('Please enter a city name.');
        }
    });

    // Temperature conversion event listener
    tempBtn.addEventListener('click', tempChange);

    // Initial setup for week days
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const dates = ['2024-05-16', '2024-05-17', '2024-05-18', '2024-05-19', '2024-05-20', '2024-05-21', '2024-05-22'];

    days.forEach((day, index) => {
        const dayElement = document.createElement('div');
        dayElement.classList.add('dayOfWeek');

        const dayNameElement = document.createElement('div');
        dayNameElement.classList.add('day-name');
        dayNameElement.textContent = `${day}, ${dates[index]}`; // Include the date next to the day

        const dayDegreesElement = document.createElement('div');
        dayDegreesElement.classList.add('day-degrees');

        const dayWeatherElement = document.createElement('div');
        dayWeatherElement.classList.add('day-weather');

        dayElement.appendChild(dayNameElement);
        dayElement.appendChild(dayDegreesElement);
        dayElement.appendChild(dayWeatherElement);

        forecastSection.appendChild(dayElement);
    });
});
    

function fetchWeatherData(city) {
    const weatherApiKey = '5f316c0912544405a317e3e5fb0f69a9';
    const weatherUrl = `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${weatherApiKey}&units=I`;

    fetch(weatherUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);  // Log the complete response to understand its structure
            updateWeatherData(data);
            const { lat, lon } = data; e
            fetchUVData(lat, lon);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

function fetchUVData(lat, lon) {
    const uvApiKey = 'openuv-u9gmcrlvzuztap-io';
    const uvUrl = `https://api.openuv.io/api/v1/uv?lat=${lat}&lng=${lon}`;

    fetch(uvUrl, {
        method: 'GET',
        headers: {
            'x-access-token': uvApiKey
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('UV API Response:', data); 
        console.log('UV Index:', data.result.uv); 
        
    })
    .catch(error => {
        console.error('Error fetching UV data:', error);
    });
}

function updateWeatherData(data) {
    const currentDayElement = document.querySelector('.current-day .degrees');
    currentDayElement.textContent = `${data.data[0].temp}°F`;

    const weekDaysElements = document.querySelectorAll('.weekForecast .dayOfWeek');
    data.data.forEach((day, index) => {
        if (index < 7) {
            const dayElement = weekDaysElements[index];
            dayElement.querySelector('.day-degrees').textContent = `${day.temp}°F`;
            dayElement.querySelector('.day-weather').textContent = `${day.weather.description}`;
            dayElement.addEventListener('click', () => {
                updateCurrentDayInfo(day, dayElement.querySelector('.day-name').textContent);
            });
            const uvIndex = day.uvIndex; 
            updateUVData(uvIndex); 
        }
    });
}

function updateCurrentDayInfo(day, dayName) {
    const currentDayElement = document.querySelector('.current-day .degrees');
    currentDayElement.textContent = `${day.temp}°F`; 
    const uvRayElement = document.querySelector('.current-day .weather-details li:nth-child(1)');
    uvRayElement.textContent = `UV Ray: ${day.uvRay}`;
    const dayNameElement = document.querySelector('.current-day .day');
    dayNameElement.textContent = dayName;

    // Update weather details for the clicked day
    const weatherDetailsElement = document.querySelector('.current-day .weather-details');
    const weatherDescriptionElements = document.querySelectorAll('.current-day .weather-details li');
    weatherDescriptionElements.forEach(element => {
        if (!element.textContent.startsWith('UV Ray')) {
            // Clear only weather description elements, not UV ray
            weatherDetailsElement.removeChild(element);
        }
    });

    const weatherDescriptionElement = document.createElement('li');
    weatherDescriptionElement.textContent = `${day.weather.description}`;
    weatherDetailsElement.appendChild(weatherDescriptionElement);

    console.log('Updated Current Day Element:', currentDayElement);
    console.log('Updated UV Ray Element:', uvRayElement);
    console.log('Updated Day Name Element:', dayNameElement);
}
function updateUVData(uvIndex) {
    const uvRayElement = document.querySelector('.current-day .weather-details li:nth-child(1)');
    uvRayElement.textContent = `UV Ray: ${uvIndex}`;
}

let isCelsius = false;

function tempChange() {
    const currentDayElement = document.querySelector('.current-day .degrees');
    const weekDaysElements = document.querySelectorAll('.weekForecast .dayOfWeek .day-degrees');

    if (isCelsius) {
        currentDayElement.textContent = `${convertToFahrenheit(parseFloat(currentDayElement.textContent)).toFixed(2)}°F`;
        weekDaysElements.forEach(element => {
            element.textContent = `${convertToFahrenheit(parseFloat(element.textContent)).toFixed(2)}°F`;
        });
    } else {
        currentDayElement.textContent = `${convertToCelsius(parseFloat(currentDayElement.textContent)).toFixed(2)}°C`;
        weekDaysElements.forEach(element => {
            element.textContent = `${convertToCelsius(parseFloat(element.textContent)).toFixed(2)}°C`;
        });
    }
    isCelsius = !isCelsius;
}

function convertToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function convertToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}





