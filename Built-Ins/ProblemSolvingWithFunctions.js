var numberSheep = prompt("What is the current sheep population?");
var numberRangers = prompt("How many park rangers are available today?");
function feedPerRanger (numberSheep, numberRangers) {
  alert ("Each Park Ranger should load " + numberSheep*2/numberRangers + " lb(s) of feed into his/her BART today.");
}
