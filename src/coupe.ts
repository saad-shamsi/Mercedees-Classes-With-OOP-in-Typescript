import { Mercedes,Vehicle } from "./index";

class Coupe extends Mercedes{

}
class CLS extends Coupe{

    automaticDrive(automaticDrive:boolean=true):void{
         console.log(`CLS coupe has an extra feature i.e:AutomaticDrive : ${automaticDrive}`);
         
    }
};
class CLA extends Coupe{
    
    allowWheels:boolean=true
    autoSeatControl( autoSeatControl:boolean=true):void{
        console.log(`CLA COUPE has many features with  Auto Seat Control: ${ autoSeatControl}`);
        
    }
};