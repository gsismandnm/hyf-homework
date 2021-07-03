//Peter house 
var houseWidth = 8; 
var houseDepth = 10; 
var houseHeight = 10;
var gardenSizeInM2 = 100;
var houseCost = 2500000;
var volumeInMeters = houseWidth * houseDepth * houseHeight;
var housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

if(housePrice > houseCost) {
   console.log( "Peter did paye too much");
}
else {
    console.log ("Peter did paye less");
}

//Julia house 
var houseWidth = 5; 
var houseDepth = 11; 
var houseHeight = 8;
var gardenSizeInM2 = 70;
var houseCost = 1000000;
var volumeInMeters = houseWidth * houseDepth * houseHeight;
var housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

if(housePrice > houseCost) {
   console.log( "Julia did paye too much");
}
else {
    console.log ("Julia did paye less");
}