/// 1

let stringArray1 = ["my", "name", "is", "Trinity"];
let numberArray = [10, 20, 30];
let objectArray = [{age: 45, name: "Jhon"}, {age: 20, name: "Aaron"}];
let stringArray2 = ["abc", "123"];

function handler1(a) {
    if (!a) return a;
    return a[0].toUpperCase() + a.slice(1);
}
function handler2(a) {
    if (typeof a !== "number") return a;
    a *= 10;
    return  + a + ", ";
}
function handler3(a) {
    if (typeof a !== "object") return a;
    a = a.name + " is " + a.age + ", ";
    return  a;
}
function handler4(a) {
let newString = "";
for (let i = a.length-1; i >= 0; i--) {
    newString = newString + a[i];
}
return newString + ", ";
}

function firstFunc(stringArray, handler) {
    let newString = "New value: ";

    for (let i = 0; i < stringArray.length; i++) {
        newString += handler(stringArray[i]);
    }

    return newString;
}    
console.log(firstFunc(stringArray1, handler1));
console.log(firstFunc(numberArray, handler2));
console.log(firstFunc(objectArray, handler3));
console.log(firstFunc(stringArray2, handler4));

/// 2
let array = [12, 23, 12, 23, 43, 8, 9, 45, 54];
let array2 = [1, 12, 23, 12, 23, 43, 8, 9, 45, 54];
let array3 = "cxhjgv";
let array4 = [1, 12, 23, 12, 23, 43, 8, "sdfsdf", 45, 54];

let requirement = 5;
let requirement2 = 15;
function callback(a, b) {
    if (typeof a === "number") {
        if (a > b) return true;
        else return false;
        } else {
            return "Принимаем только числовые массивы";
        }
    }   
function everyFunction (array, requirement, callback) {
    if (typeof array === "object"){
        let a = true;
        for (let i = 0; i < array.length; i++) {
            if (typeof callback(array[i], requirement) === "boolean") {
            a = a && callback(array[i], requirement);
            } else {
                return callback(array[i], requirement);
                break;
            }
        }
        return a;
    }
    else return "Принимаем только массивы";
}
console.log(everyFunction (array, requirement, callback));
console.log(everyFunction (array2, requirement, callback));
console.log(everyFunction (array, requirement2, callback));
console.log(everyFunction (array3, requirement, callback));
console.log(everyFunction (array4, requirement, callback));

/// 3

let array = [1,2,3,5,8,9,10];
let newArray = array.map(function callback(num){
    if (typeof num === "number" ) {
        let newObject = {}; 
        newObject.digit = num;
        newObject.odd = num % 2 === 0 ? true : false;
        return newObject;
    } else {
        return num;
    }
});
console.log(newArray);

/// 4

let array = [2, 4, 50, 1, 0, 18, 40]
let array2 = [2, 4, 50, 1, "asdasd", 18, 40]
function isZero(number) {
    return number === 0;
  }
let zero = !array.some(isZero);
console.log(zero);
zero = !array2.some(isZero);
console.log(zero);

/// 5

let array = ['yes', 'hello', 'no', 'easycode', 'what'];
function lenghtMoreThanThree(string){
    if (string.length > 3) {
        return true
    }   else {
        return false;
    }
}
let MoreThanThree = array.some(lenghtMoreThanThree);
console.log(MoreThanThree);

/// 6

let array = [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
{char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
{char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}];

// array.sort(function(prev, next){
//     if (prev.index < next.index) return -1;
//     if (prev.index > next.index) return 1;
// });
// let newArray = array.reduce(function(newArray, current) {
//     return newArray + current.char;
// }, "");
// console.log(newArray);

let newArray = array.sort(function soneSort(prev, next){
    if (prev.index < next.index) return -1;
    if (prev.index > next.index) return 1;
}).reduce(function(newArray, current) {
    return newArray + current.char;
}, "");
console.log(newArray);

/// 7

let array = [ [14, 45],  [1],  ['a', 'c', 'd'] ]
array.sort(function(prev, next){
    if (prev.length < next.length) return -1;
    if (prev.length > next.length) return 1;
});
console.log(array);

/// 8

let array = [
    {cpu: 'intel', info: {cores:2, сache: 3}},
    {cpu: 'intel', info: {cores:4, сache: 4}},
    {cpu: 'amd', info: {cores:1, сache: 1}},
    {cpu: 'intel', info: {cores:3, сache: 2}},
    {cpu: 'amd', info: {cores:4, сache: 2}}
];
array.sort(function(prev, next){
    if (prev.info.cores < next.info.cores) return -1;
    if (prev.info.cores > next.info.cores) return 1;
});
console.log(array);

/// 9

let products = [
    {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
    {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
    {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
    {title: 'prod7', price: 19}, {title: 'prod8', price: 63}
];

let minPrice = 15;
let maxPrice = 30;
let newProducts = products.filter(function(product){
    return product.price >= minPrice && product.price <= maxPrice;
}).sort(function(prev, next){
    if (prev.price < next.price) return -1;
    if (prev.price > next.price) return 1;
});
console.log(newProducts);