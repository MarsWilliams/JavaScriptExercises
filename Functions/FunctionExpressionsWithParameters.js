var people = 10;
var rain = 3;
var sharks = 6;
var fearGenerated = function ( numPeeps, rainInInches, numSharks){
  var rainFear = numPeeps * rainInInches;
  var sharkFear = numSharks * numSharks * numSharks;
  var totalFear = sharkFear + rainFear;
  return totalFear;
};
var fear = fearGenerated(people, rain, sharks);
