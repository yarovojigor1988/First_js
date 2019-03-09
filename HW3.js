let a = "block";
switch (a) {
    case "block" : console.log("block"); break;
    case "none" : console.log("none"); break;
    case "inline" : console.log("inline"); break;
    default : console.log("other");
}
    

let a = "invisible";
a = a === "hidden" ? "visible" : "hiden" ;

let a = 34;
a = a < 0 ? "less then zero" : a > 0 ? a * 10 : 1;    

let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false };
car.age > 5 ? (car.needRepair = true,  console.log('Need Repair')) : car.needRepair = false;

///

let testObject = {product : "iphone"};
testObject.price = 1000;
testObject.currency = "dollar";
testObject.details = {model :"8", color : "red"};

///

let string = "i am in easycode";
let newString = "";
for (let i = 0; i < string.length; i++ ) {
    if (i === 0) {
        newString = newString + string[i].toUpperCase();
    } else if (string[i-1] === " ") {
        newString = newString + string[i].toUpperCase();
    } else newString = newString + string[i];
}

let string = "tseb eht ma i";
let newString = "";
for (let i = string.length-1; i >= 0; i--) {
    newString = newString + string[i];
}
console.log(newString);

let a = 10;
for (let i = 1; i <= a; i++) {
    if (i ===1) {
    factorialA = i;
    } else {
        factorialA = factorialA * i;
    }
}
console.log(factorialA);

let string = "JavaScript is a pretty good language";
let newString = "";
for (let i = 0; i < string.length; i++ ) {
    if (string[i] !== " ") {
        if (string[i-1] === " ") {
            newString = newString + string[i].toUpperCase();
        } else newString = newString + string[i];
    }
}
console.log(newString);

myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
for (let value of myArray) {
    if (value % 2 !== 0) {
    console.log(value);
    }
}

let list = {
    name: "denis",
    work: "easycode",
    age: 29
}

for (let item in list) {
  if (typeof list[item] === "string") {
    list[item] = list[item].toUpperCase();
  }
}
console.log(list);