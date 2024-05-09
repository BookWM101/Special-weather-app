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

