

const gradus = +prompt("Input degree on the Celsius scale");
alert(`${gradus} Celsius is ${transfer(gradus)} Fahrenheit`);

function transfer(gradus) {
    return Math.round(9 * gradus / 5 + 32);
}