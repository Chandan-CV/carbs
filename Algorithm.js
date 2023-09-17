import { ca } from "date-fns/locale";

function CarbonEmmission1(ElectricityUsage, NaturalGasUsage, LPGCylinders, CoalUsage, WoodenPellets, Propane) {
  // ...
    let CarbonEmmission1 = 0;
    CarbonEmmission1 = (ElectricityUsage *  0.0007082) + (NaturalGasUsage * 0.00018254) + (LPGCylinders * 0.024290604) + (CoalUsage * 0.00288326) + (WoodenPellets * 0.00005) + (Propane * 0.00154354 );
    return CarbonEmmission1;
}
function CarbonEmmission2(lat1,lon1,lat2,lon2) {
  // for flights
  
  let CarbonEmmission2 = 0;
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  CarbonEmmission2 = d * 0.000142857;
  return CarbonEmmission2;
}
function CarbonEmmission3(Cartype, BikeType,Mileage) {
    // for cars
    let CarbonEmmission3 = 0;
    switch (Cartype) {
        case "1":
            Cartype = Mileage * 0.00017082;
            break;
        case "2":
            Cartype = Mileage * 0.00017048;
            break;
        case "3":
            Cartype = Mileage * 0.00017517;
            break;
    }
    switch (BikeType) {
        case "1":
            BikeType = Mileage * 0.00008306;
            break;
        case "2":
            BikeType = Mileage * 0.0001009;
            break;
        case "3":
            BikeType = Mileage * 0.00013245;
            break;
    }

    CarbonEmmission3 = (Cartype ) + (BikeType) ;
    return CarbonEmmission3;
}
function CarbonEmmission4(TrainMileage) {
    // for trains
    let CarbonEmmission4 = 0;
    carbonEmmission4 = TrainMileage *  0.00000446;
    return CarbonEmmission4;
}
function CarbonEmmission5(BusMileage) {
    // for buses
    let CarbonEmmission5 = 0;
    CarbonEmmission5 = BusMileage *  0.0000965;
    return CarbonEmmission5;
}
function deg2rad(deg) {
    return deg * (Math.PI/180)
  }