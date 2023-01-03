//      \***** Elaborating Mercedes Classes With The Help Of Object Oriented Programming *****/
class Vehicle {
  constructor(
    vin:string,
    color: string,
    height: string,
    width: string,
    _length: string,
    weight: string
  ) {
    this.color = color;
    this.height = height;
    this.width = width;
    this._length=_length
    this.weight = weight;
    this.vin=vin
  }
   vin:string;
  color: string;
  height: string;
  width: string;
  _length: string;
  weight: string;
  power(power: boolean) {
    if (power === true) {
      console.log("Car's engine is on");
    } else {
      console.log("Car's engine is off");
    }
  }
}

class Mercedes extends Vehicle {
  constructor(
    name:string,
    vin:string,
    color: string,
    height: string,
    width: string,
    _length: string,
    weight: string,
    wheels: number,
    make: number,
    model:string,
    fuelCapacity:string

  ) {
    super(vin,color, height, width, _length, weight);
    this.name=name
    this.wheels = wheels;
    this.make = make;
    this.model = model;
    this.fuelCapacity=fuelCapacity
   
  }
  name:string
  wheels: number;
  make: number;
  model: string;
  fuelCapacity:string


  speed(spdLimit: number): number {
    console.log(spdLimit);
    return spdLimit;
  }
}
const vehicle=new Vehicle("58YJS","black","5.5ft","14.7ft","15 feet","4,100lb")
const mercedes=new Mercedes("Merceds-Benz","58YJS","black","5.5ft","14.7ft","15 feet","4,100lb",4,2020,"GLA_SUV","22.5 Gallon")
console.log(vehicle);
console.log(mercedes);
export {Mercedes,Vehicle}
type inheritanceMerdedes={
  name:string,
  vin:string,
  color: string,
  height: string,
  width: string,
  _length: string,
  weight: string,
  wheels: number,
  make: number,
  model:string,
  fuelCapacity:string
}