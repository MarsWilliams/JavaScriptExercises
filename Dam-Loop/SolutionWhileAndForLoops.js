var currentGen = 1;
var totalGen = 19;
var totalMW = 0;
while(currentGen <=4) {
  totalMW+=62;
  console.log("Generator #" + currentGen + " is on, adding 62 MW, for a total of " + totalMW + " MW!");
  currentGen++;
}
for(currentGen = 5; currentGen <= totalGen; currentGen++) {
    totalMW+=124;
     console.log("Generator #" + currentGen + " is on, adding 124 MW, for a total of " + totalMW + " MW!");
}
