var numPeeps = 3;
var rainInInches = 3;
var numSharks = 4; 
var fear = fearGenerated(numPeeps, rainInInches, numSharks);
var fearMessage; 
  if (fear < 200) {
    fearMessage = function () {
    return confirm ("Fear Level: Low" + "\n" + "Should be no problem at all...mwahaha." +"\n" + "Still wanna ride?");
  };
  } else if (fear <= 300) {
    fearMessage = function () {
    return confirm ("Fear Level: MEDIUM" + "\n" + "You may want to rethink this one, man. MWAHAHA!" + "\n" + "Think you'll make it?");
  };
  } else if (fear <= 400) {
    fearMessage = function () {
    return confirm ("Fear Level: HIGH" + "\n" + "ABANDON ALL HOPE!!" + "\n" + "Have a death wish?");
  };
}
var startRide = confirmRide(fearMessage);
function confirmRide( confirmToGo ){
  return confirmToGo();
}
