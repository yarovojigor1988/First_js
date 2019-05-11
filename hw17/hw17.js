/// 1 

function Planet(name) {
    this.name = name;
}

Planet.prototype.getName = function () {
    return 'Planet name is ' + this.name;
}

function PlanetWithSatellite (name, satelitName) {
    Planet.call(this,name);
    this.satelitNname = satelitName;
}

// PlanetWithSatellite.prototype = Object.create(Planet.prototype);
// PlanetWithSatellite.prototype.constructor = PlanetWithSatellite;

PlanetWithSatellite.prototype.getName = function () {
    return Planet.prototype.getName.call(this) + `. The satellite is ` + this.satelitNname;
}

let earth = new PlanetWithSatellite('earth', 'moon');
earth.getName();

/// 1 class

class Planet {
    constructor(name) { 
        this.name = name; 
    };
    getName() { return 'Planet name is ' + this.name; }
}

class PlanetWithSatellite extends Planet {
    constructor(name, satelitName) {
      super(name); 
      this.satelitName = satelitName;
    }
    getName() { return super.getName() + `. The satellite is ` + this.satelitName; }
}
  
let earth = new PlanetWithSatellite('earth', 'moon');
earth.getName();

/// 2 
class Building {
    constructor(name, numberOfFloors) {
        this.name = name;
        this.numberOfFloors = numberOfFloors;
    }
    getNumberOfFloors() {
        return this.numberOfFloors;
    };
    setNumberOfFloors(value) {
        this.numberOfFloors = value;
        return this.numberOfFloors;
    };
}

class residentialHouse extends Building {
    constructor(name, numberOfFloors, apartmentsOnFloor) {
        super(name, numberOfFloors);
        this.apartmentsOnFloor = apartmentsOnFloor;
    }
    getNumberOfFloors() {
        return ('Этажей: ' + super.getNumberOfFloors() + ' квартир: ' + super.getNumberOfFloors() * this.apartmentsOnFloor);
    }
}

class shoppingMall extends Building {
    constructor(name, numberOfFloors, shopsOnFloor) {
        super(name, numberOfFloors);
        this.shopsOnFloor = shopsOnFloor;
    }
    getNumberOfFloors() {
        return ('Этажей: ' + super.getNumberOfFloors() + ' Магазинов: ' + super.getNumberOfFloors() * this.shopsOnFloor);
    }
}

let BuildingOne = new residentialHouse("Golden Plaza", 24, 4);
console.log(BuildingOne.getNumberOfFloors());


let BuildingTwo = new shoppingMall("Platinum Plaza", 5, 14);
console.log(BuildingTwo.getNumberOfFloors());

/// 3 

function furniture(name, price){
    this.name = name;
    this.price = price;
}

furniture.prototype.getInfo = function () {
    return 'Название мебели: ' + this.name + ', Цена: ' + this.price;
}

function officeFurniture (name, price, printerPresence) {
    furniture.call(this, name, price);
    this.printerPresence = printerPresence;
}

officeFurniture.prototype = Object.create(furniture.prototype);
officeFurniture.prototype.constructor = officeFurniture;

officeFurniture.prototype.getInfo = function () {
    if (this.printerPresence === true) {
        return furniture.prototype.getInfo.call(this) + `. Принтер входит в компект.`;
    } else if (this.printerPresence === false) {
        return furniture.prototype.getInfo.call(this) + `. Принтер НЕ входит в компект.`;
    } else {return furniture.prototype.getInfo.call(this) + `. Наличие принтера в комплекте уточняйте у продавца.`;}
}

function homeFurniture (name, price, color) {
    furniture.call(this, name, price);
    this.color = color;
}

homeFurniture.prototype = Object.create(furniture.prototype);
homeFurniture.prototype.constructor = homeFurniture;

homeFurniture.prototype.getInfo = function () {
    return furniture.prototype.getInfo.call(this) + `. Цвет: ` + this.color;
}



let someFurniture = new officeFurniture('Офисная мебель', 24000, true);
console.log(someFurniture.getInfo());

let anotherFurniture = new homeFurniture('Мягкая мебель', 54000, 'Старое золото');
console.log(anotherFurniture.getInfo());

///4 

class User {
    constructor(name, date) { 
        this.name = name; 
        this.date = date;
    };
    getInfo() { return 'Имя пользователя ' + this.name + ' Дата регистрации: ' + this.date; }
}

class Admin extends User {
    constructor(name, date, superAdmin) {
      super(name, date); 
      this.superAdmin = function () { return superAdmin; };
    }
    
    getInfo() { if (this.superAdmin === true) {return super.getInfo() + `. Права Супер Админа ЕСТЬ`;    
        } else {return super.getInfo() + `. Прав Супер Админа НЕТ`}
    }
}

class Guest extends User {
    constructor(name, date, validDate) {
      super(name, date); 
      this.validDate = validDate; 
    }
    
    getInfo() { return super.getInfo() + `. Срок действия: ` + this.validDate + ' Дней';}   
}


  
let MegaAdmin = new Admin('MegaAdmin', '12.06.2006', true);
console.log(MegaAdmin.getInfo());

let Sasha = new Guest ('Alexandr', '12.05.2019', 30);
console.log(Sasha.getInfo());