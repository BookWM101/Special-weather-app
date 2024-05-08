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