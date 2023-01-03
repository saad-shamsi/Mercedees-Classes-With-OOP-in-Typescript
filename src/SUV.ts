import { Mercedes } from "./index";
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
class SUV extends Mercedes {
  engine: string = "2.0L inline-4 turbo";
  accleration: string = "6.1 sec 0-60 mph Disclaimer**";
  cityFuelEconomy: string = "21 mpg Disclaimer†";
  highwayFuelEconomy: string = "28 mpg Disclaimer†";
  passengerCapacity: number = 5;
  allWheelDrive:boolean
  advanceSafety:boolean
  constructor(

    vin: string,
    color: string,
    height: string,
    width: string,
    _length: string,
    weight: string,
    name: string,
    wheels: number,
    make: number,
    model: string,
    allWheelDrive:boolean,
    advanceSafety:boolean,
    fuelCapacity:string
  ) {
    super(
      vin,
      color,
      height,
      width,
      _length,
      weight,
      name,
      wheels,
      make,
      model,
      fuelCapacity
    );
    this.allWheelDrive=allWheelDrive
    this.advanceSafety=advanceSafety
  }
}
class G extends SUV {
  constructor(
    vin: string,
    color: string,
    height: string,
    width: string,
    _length: string,
    weight: string,
    name: string,
    wheels: number,
    make: number,
    model: string,
    allWheelDrive:boolean,
    advanceSafety:boolean,
    fuelCapacity:string,
    twin_turbo:boolean
    
    ){
    super(
      vin,
      color,
      height,
      width,
      _length,
      weight,
      name ,
      wheels,
      make,
      model,
      allWheelDrive,
      advanceSafety,
      fuelCapacity)
      this.twin_turbo=twin_turbo
  }
    twin_turbo:boolean
    twinTubo(turboPower:boolean){
        if (turboPower===true){
           console.log("G-SUV extra-High powered");
           return turboPower
        }else{
            console.log("G-SUV High powered");
            return turboPower

        }
    }
    
}
// const gclass= new G()
// gclass.twinTubo(true)

class GLS extends SUV{

  luxury(comfort:true):void{
    console.log("Ultra luxury seires with extra comfort features");
    
  }
  
  

}
// const glsClass=new GLS()

class GLE extends SUV{
  automaticHigh_beamHeadlight:boolean=true
  sportyFrontEnd:boolean=true
  gle(aboutGLEClass:string):void{
    console.log("Mercedes-Benz GLE boasts one of the best interiors in the luxury midsize SUV segment");
    
  }
}

class GLC extends SUV{
  sunroof:boolean=true
  allrounder:boolean=true



glc(feature:string):void{
  console.log("Yes. Sunroof feature is available in the top variant of Mercedes-Benz GLC.");
  
}
}
class GLA extends SUV{
  rim:string="Spiral look trim"

}
// const gla=new GLA()
// console.log(gla);

