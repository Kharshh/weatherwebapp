let Celsius = document.getElementById("Celsius");
let Fahrenheit = document.getElementById("Fahrenheit");
let Kelvin = document.getElementById("Kelvin");

Celsius.oninput = function convert(){
    let F = (parseFloat(Celsius.value) * 9) / 5 + 32;
    Fahrenheit.value = F.toFixed(3);
    let K = (parseFloat(Celsius.value) + 273.15);
    Kelvin.value = K.toFixed(3);
}

Fahrenheit.oninput = function convert(){
    let K = (parseFloat(Fahrenheit.value) + 273.15);
    Kelvin.value = K.toFixed(3);
    let C = ((parseFloat(Fahrenheit.value) -32) *5) / 9;
    Celsius.value = C.toFixed(3);
}

Kelvin.oninput = function convert(){
    let F = (parseFloat(Kelvin.value) * 9) / 5 + 32;
    Fahrenheit.value = F.toFixed(3);
    let C = ((parseFloat(Kelvin.value) -32) *5) / 9;
    Celsius.value = C.toFixed(3);
}