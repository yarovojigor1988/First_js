/// This 1

const rectangle = {
    width: 20,
    height:  30,
    getSquare: function () {return rectangle.width * rectangle.height} 

}

rectangle.getSquare();

/// 2

const price = {
    price: 10,
    discount: '15%',
    getPrice: function () {return price.price},
    getPriceWithDiscount: function () {return (price.price * (1 - parseInt(price.discount)/100)) }    

};
console.log(price.getPrice());
console.log(price.getPriceWithDiscount());

/// 3

const someObject = {
    height: 10,
    getInc: function () {return someObject.height + 1}
}

console.log(someObject.height);
console.log(someObject.getInc());


/// 4 

const numerator = {
    value: 1,
    double: function () {numerator.value *= 2; return this},
    plusOne: function () {numerator.value += 1; return this},
    minusOne: function () {numerator.value -= 1; return this}
}

numerator.double().plusOne().plusOne().minusOne();
console.log(numerator.value);

/// 5 

const anotherObject = {
    price: 134,
    quantity: 312,
    totalPrise: function () {return this.price * this.quantity}
}
console.log(anotherObject.totalPrise());

const yetAnotherObject = {
    price: 100,
    quantity: 41,
}

console.log(anotherObject.totalPrise.call(yetAnotherObject));

/// 6

let sizes = {width: 5, height: 10};
getSquare = function () {return this.width * this.height};

console.log(getSquare.call(sizes));

/// 7

let element = {
    height: 25,
    getHeight: function () {return this.height;}
};

// getElementHeight(); - сейчас не работает
let getElementHeight = element.getHeight.bind(element);;
console.log(getElementHeight());

/// 8  стрелочные функции

const foo = (...param) => { 
    if (!param.length) return 0; 
    return (param.reduce((prev, next) => prev + next))}

console.log(foo());
console.log(foo(1,2,3,4));