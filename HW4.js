/// 1

let a = 1;
let b = 23;
let c = "строка";
function multiply(...artr) {
    if (artr.length > 0) {
        result = 1;
        for (let i = 0; i < artr.length; i++) {
            if (typeof artr[i] === "number") {
            result = result*artr[i];
            }
            else {
                return "Неверные входящие данные";
                break;
            }
        }
        return result;
    } else {
        return 0;
    }
}
let wer = multiply();
console.log(wer);
wer = multiply(a, b);
console.log(wer);
wer = multiply(b, c);
console.log(wer);

/// 2

let testString = "test string";
function reverseString(testString) {
    let newString = "";
    for (let i = testString.length-1; i >= 0; i--) {
        newString = newString + testString[i];
    }
    return newString;
}
console.log(reverseString(testString));


/// 3

let testString = "test string";
function reverseString(testString) {
    let newString = "";
    for (let i = 0; i < testString.length; i++) {
        if (i < testString.length-1) {
        newString = newString + testString.charCodeAt(i) + " ";
        } else {
            newString = newString + testString.charCodeAt(i);
        }

    }
    return newString;
}
console.log(reverseString(testString));

/// 4

function guessTheNumber(a) {
    if (typeof a === "number" && a >= 1 && a <= 10 && a === Math.trunc(a)){
        randomNumber = Math.ceil(Math.random() * 10);
        if (a === randomNumber) {
            return "Вы выиграли";
        } else {
            return `Вы не угадали ваше число ${a} а выпало число ${randomNumber}`;
        }

    } else {
        return "Вы должны ввести целое число от 1 до 10";
    }
}
let a = 1;
console.log(guessTheNumber(a));
a = 6;
console.log(guessTheNumber(a));
a = 14;
console.log(guessTheNumber(a));
a = "sddf";
console.log(guessTheNumber(a));
a = 1.4;
console.log(guessTheNumber(a));

/// 5

let a = 15;
function getArray(a) {
    let newArray = [];
    for (let i = 0; i < a; i++) {
        newArray[i] = i + 1;
    }
    return newArray;
}
console.log(getArray(a));

/// 6 

let array = [15, 234, 23423, 23, "vfxcv"];
function doubleArray(array) {
    b = array.length;
    for (let i = 0; i < b; i++) {
        array[b + i] = array[i];
    }
    return array;
}
console.log(doubleArray(array));

/// 7

a = [1, 2, 6, 4, 4];
b = ["34", "sdfsd"];
c = ["dcv ", 34, "dfg"];
function changeCollection (...mass) {
    for (let i = 0; i < mass.length; i++) {
        mass[i].shift();
    }
    return mass;
}
console.log(changeCollection(a, b, c));

/// 8

let users = [ {name: "Denis", age: "29", gender: "male"} , {name: "Ivan", age: "22", gender: "male"}, {name: "Senia", age: "52", gender: "male"}, {name: "Lida", age: "22", gender: "female"} ];
let key = "gender";
let value = "male";
function funcGetUsers(users, key, value) {
    newUsers = [];
    if (typeof users !== "undefined" && typeof key !== "undefined" && typeof value !== "undefined" ) {
        for (let i = 0 ,j=0; i < users.length; i++) {
            for (let item in users[i]) {
                if (item === key && users[i][item] === value) {
                    newUsers[j] = users[i];
                    j++;
                }
            }
        }
        if (newUsers.length > 0) {
        return newUsers;
        } else {
            return "совпадений не найдено";
        }
    } else {
    return "error";
    }
}
let a = funcGetUsers(users, key, value);
console.log(a);
key = "gender";
value = "female";
a = funcGetUsers(users, key, value);
console.log(a);
key = "name";
value = "Ivan";
a = funcGetUsers(users, key, value);
console.log(a);
key = "age";
value = "22";
a = funcGetUsers(users, key, value);
console.log(a);
key = "age";
value = "30";
a = funcGetUsers(users, key, value);
console.log(a);