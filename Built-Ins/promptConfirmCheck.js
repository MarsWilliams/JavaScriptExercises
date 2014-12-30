var userAge = prompt("What's your age, user?");
var ageIsCorrect = confirm("You entered " + userAge + ". Is this correct?");
while(ageIsCorrect ===false) {
  if(ageIsCorrect===false) {
    var userAge = prompt("What's your age, user?");
    var ageIsCorrect = confirm("You entered " + userAge + ". Is this correct?");
  } else if(ageIsCorrect===true) {
    alert("Great! Your age is logged as " + userAge + ".");
  }
}
