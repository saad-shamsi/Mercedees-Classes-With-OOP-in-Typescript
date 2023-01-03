import { Mercedes, Vehicle } from "./index";

class Roadster extends Mercedes {
  sportsCAr: boolean = true;
  roadsters: boolean = true;
  roadstersCar(sportsCAr: boolean, roadsters: boolean): void {
    console.log(`SportsCar: ${sportsCAr}\n Roadster: ${roadsters}`);
  }
}

class SL extends Roadster {
  adjustableSuspension: boolean = true;
  AMG_Dynamic_Select(dynamicSlect: boolean): void {
    console.log(
      `Adjustable Suspension: ${true} with AMG_Dynamic_Select : ${dynamicSlect}`
    );
  }
}
class SLC extends Roadster {
  HighQualityWoofers: boolean = true;
  AutomaticDoors(auto: boolean = true): void {
    console.log(`SLC class has AutomaticDoors: ${auto}`);
  }
}
