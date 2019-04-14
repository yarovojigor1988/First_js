/// 1

function minus (a){
    if (!a || typeof(a)!="number") {a = 0};
    function Subtraction (b) {
        if (!b || typeof(b)!="number") {b = 0};
    console.log(a - b);
    }
    return Subtraction;
}
minus(10)(6); // 4
minus(5)(6); // -1
minus(10)(); // 10
minus()(6); // -6
minus()(); // 0

/// 2

function multiplyMaker (a) {
    let result = a;
    return function (b){
        if (!b || typeof(b)!="number") {b = 1};
        a = a * b;     
        console.log(a);
    }
}
const multiply = multiplyMaker(2);

multiply(4);

multiply(4);

multiply(4);

/// 3

const someString = (function () {
    let ourString = "";
    
    function setString(value) {
        if (!value) {ourString = "";}
        else 
        if (typeof(value) == "number") {ourString = "" + value;}
        else {ourString = value;}
       }
    


    function getString() {return ourString;}
    function getStringLenght() {
        let lenght = ourString.length;
        return lenght;
    }
    function getInvertedString() {
        let InvertedString = '';
        for (var i = ourString.length - 1; i >=0; i--) {
            InvertedString += ourString[i];
        }
        return InvertedString;
    }


    return {
            setString: setString,
            getString: getString,
            getStringLenght: getStringLenght,
            getInvertedString: getInvertedString
    };
}());

someString.setString("Our sring there");
console.log(someString.getString());
console.log(someString.getStringLenght());
console.log(someString.getInvertedString());
someString.setString(345);
console.log(someString.getString());
console.log(someString.getStringLenght());
console.log(someString.getInvertedString());


/// 4 
const calculator = (function () {
    let valueData = 0;
    
    function setValue(value) {
        if (!value || typeof(value) !== "number") {console.log("ERROR");}
        else {return valueData = value;}
    }
    
    function addition(value) {
        if (!value || typeof(value) !== "number") {console.log("ERROR");}
        else {return valueData = valueData + value;}
    }

    function multiplication(value) {
        if (!value || typeof(value) !== "number") {console.log("ERROR");}
        else {return valueData = valueData * value;}
    }

    function division(value) {
        if (!value || typeof(value) !== "number") {console.log("ERROR");}
        else {return valueData = valueData / value;}
    }

    function subtraction(value) {
        if (!value || typeof(value) !== "number") {console.log("ERROR");}
        else {return valueData = valueData - value;}
    }
    function exponentiation(value) {
        if (!value || typeof(value) !== "number") {console.log("ERROR");}
        else {
            let result = 1;
            for (let i=0; i<value; i++) {
                result = result * valueData;
            }
            return valueData = result;
        }
    }
    function getValue() {
        return valueData = Math.round(valueData*100)/100;
    }

    return {
        setValue: setValue,
        addition: addition,
        multiplication: multiplication,
        division: division,
        subtraction: subtraction,
        exponentiation: exponentiation,
        getValue: getValue
    };
}());
calculator.setValue(10);
calculator.addition(10);
calculator.multiplication(2);
calculator.division(10);
calculator.subtraction(10);
calculator.exponentiation(3);
calculator.getValue();


/// ниже вариант - для работы со строкой, как сделать это без this не понял;

const calculator2 = {
    valueData: 0,
    
    setValue: function (value) {
        if (!value || typeof(value) !== "number") {console.log("ERROR");}
        else {
            calculator2.valueData = value;
            return this;
        }
    },
    
    addition: function (value) {
        if (!value || typeof(value) !== "number") {console.log("ERROR");}
        else {
            calculator2.valueData = calculator2.valueData + value;
            return this;
        }
    },

    multiplication: function (value) {
        if (!value || typeof(value) !== "number") {console.log("ERROR");}
        else {
            calculator2.valueData = calculator2.valueData * value;
            return this;
        }
    },

    division: function (value) {
        if (!value || typeof(value) !== "number") {console.log("ERROR");}
        else {
            calculator2.valueData = calculator2.valueData / value;
            return this;
        }
    },

    subtraction: function (value) {
        if (!value || typeof(value) !== "number") {console.log("ERROR");}
        else {
            calculator2.valueData = calculator2.valueData - value;
            return this;
        }
    },
    exponentiation: function (value) {
        if (!value || typeof(value) !== "number") {console.log("ERROR");}
        else {
            let result = 1;
            for (let i=0; i<value; i++) {
                result = result * calculator2.valueData;
            }
            calculator2.valueData = result;
            return this;

        }
    },
    getValue: function () {
        calculator2.valueData = Math.round(calculator2.valueData*100)/100;
        console.log(calculator2.valueData);
        return this;
    }
}

calculator2.setValue(10).addition(10).multiplication(2).division(10).subtraction(10).exponentiation(3).getValue();

/// 5

function Car(name, age) {
    this.name = name;
    this.age = age;
    this.getMake = function (){
        return this.name.charAt(0).toUpperCase() + this.name.slice(1);
    };
    this.yearOfManufacture = function (){
        currentYear = new Date;
        return currentYear.getFullYear() - this.age;
    }
}
const car1 = new Car('lexus', 4);
console.log(car1.getMake());
console.log(car1.yearOfManufacture());

/// 6

function string(string) {
    let someString = string;

    this.getString = function (){
        return someString;
    };
    this.getEncryptedString = function (){
        let encryptedString = "";
        for (i=0; i < someString.length; i++) {
            encryptedString += someString.charCodeAt(i) + ";";
        }
        return encryptedString;
    };
}
const string1 = new string('lexus');
console.log(string1.getString());
console.log(string1.getEncryptedString());

