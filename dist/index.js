"use strict";
//      \***** Elaborating Mercedes Classes With The Help Of Object Oriented Programming *****/
class Vehicle {
    constructor(vin, color, height, width, _length, weight) {
        this.color = color;
        this.height = height;
        this.width = width;
        this._length = _length;
        this.weight = weight;
        this.vin = vin;
    }
    power(power) {
        if (power === true) {
            console.log("Car's engine is on");
        }
        else {
            console.log("Car's engine is off");
        }
    }
}
class Mercedes extends Vehicle {
    constructor(name, vin, color, height, width, _length, weight, wheels, make, model,) {
        super(vin, color, height, width, _length, weight);
        this.name = name;
        this.wheels = wheels;
        this.make = make;
        this.model = model;
    }
    speed(spdLimit) {
        console.log(spdLimit);
        return spdLimit;
    }
}
const vehicle = new Vehicle("58YJS", "black", "5.5ft", "14.7ft", "15 feet", "4,100lb");
const mercedes = new Mercedes("Merceds-Benz", "58YJS", "black", "5.5ft", "14.7ft", "15 feet", "4,100lb", 4, 2020, "GLA_SUV");
console.log(vehicle);
console.log(mercedes);
