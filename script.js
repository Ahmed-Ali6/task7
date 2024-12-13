var num1 = +prompt("Please enter first number:");
var num2 = +prompt("Please enter second number:");
var isEqual = num1 > num2;

var sumResult = num1 + num2;
var subResult = num1 - num2;
var divisionResult = num1 / num2;
var modulusResult = num1 % num2;
var powerResult = num1 ** num2;
var multiplicationResult = num1 * num2;

document.writeln(`<h1>The sum is: ${sumResult}</h1>`);
document.writeln(`<h1>The subtraction is: ${subResult}</h1>`);
document.writeln(`<h1>The division is: ${divisionResult}</h1>`);
document.writeln(`<h1>The modulus is: ${modulusResult}</h1>`);
document.writeln(`<h1>The power is: ${powerResult}</h1>`);
document.writeln(`<h1>Is the first number greater than the second? ${isEqual}</h1>`);
document.writeln(`<h1>The multiplication is: ${multiplicationResult}</h1>`);
