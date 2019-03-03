let string = "some test string";
let stryngLenght = string.length;
let firstSymbol = string[0]; 
let lastSymbolPosition = stryngLenght - 1;
let lastSymbol = string[lastSymbolPosition]; 
firstSymbol = firstSymbol.toUpperCase();
lastSymbol = lastSymbol.toUpperCase();
let stringPosition = string.indexOf("string");
let firstWhitespacePosition = string.indexOf(" ");
let secondWhitespacePosition = string.indexOf(" ", firstWhitespacePosition + 1);
let firstSubstring = string.substr(5, 4);
let secondSubstring = string.slice(5, 9);
let newString = string.slice(0, lastSymbolPosition - 6);
let a = 20;
let b = 16;
let stringAB = (`${a}${b}`); 

//

let pi = Math.PI.toFixed(2);
let array = [15, 11, 16, 12 ,51, 12, 13, 51];
let maxArray = Math.max(...array);
let minArray = Math.min(...array);
let randomNumeric = Math.round(Math.random() * 100) / 100;
let x = 293;
let randomNumericToX = Math.floor(Math.random() * x);
let accurateCalculations = (0.6 * 10 + 0.7 * 10) / 10;
let numberFromTheLine = parseInt("100$");
