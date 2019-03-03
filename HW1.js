let string = "some test string";
let stryngLenght = string.length;
let firstSymbol = string[0]; 
console.log(firstSymbol);

let lastSymbolPosition = stryngLenght - 1;
let lastSymbol = string[lastSymbolPosition];
console.log(lastSymbol);

firstSymbol = firstSymbol.toUpperCase();
console.log(firstSymbol);

lastSymbol = lastSymbol.toUpperCase();
console.log(lastSymbol);

let stringPosition = string.indexOf("string");
console.log(stringPosition);

let firstWhitespacePosition = string.indexOf(" ");
let secondWhitespacePosition = string.indexOf(" ", firstWhitespacePosition + 1);
console.log(secondWhitespacePosition);

let firstSubstring = string.substr(5, 4);
console.log(firstSubstring);

let secondSubstring = string.slice(5, 9);
console.log(secondSubstring);

let newString = string.slice(0, lastSymbolPosition - 6);
console.log(newString);

let a = 20;
let b = 16;
let stringAB = (`${a}${b}`); 
console.log(stringAB);


//

let pi = Math.PI.toFixed(2);
console.log(pi);

let array = [15, 11, 16, 12 ,51, 12, 13, 51];
let maxArray = Math.max(...array);
console.log(maxArray);

let minArray = Math.min(...array);
console.log(minArray);

let randomNumeric = Math.round(Math.random() * 100) / 100;
console.log(randomNumeric);

let x = 293;
let randomNumericToX = Math.floor(Math.random() * x);
console.log(randomNumericToX);

let accurateCalculations = (0.6 * 10 + 0.7 * 10) / 10;
console.log(straccurateCalculationsingAB);

let numberFromTheLine = parseInt("100$");
console.log(numberFromTheLine);