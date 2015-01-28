//Takes arguments of arbitrary length, and returns the sum of all Numbers present// 
function sumOfNumbers() {
    var numSum = 0;
    var args;
    if (arguments) {
		//converts arguments to an array
        args = Array.prototype.slice.call(arguments);
        for (var i = 0; i < args.length; i++) {
			//validates that the item is a Number
            if (typeof args[i] === 'number') {
                numSum += args[i];
            }
        }
    }
    return numSum;
}

//compares two parameters, and if they are not equal, returns an error
function assertEqual(a, b, message) {
    if (a == b) return true;
    throw new Error(message + " mismatch: " + a + " != " + b);
}

var test1 = sumOfNumbers(3, 4, 'apple');
var test2 =sumOfNumbers();
var test3 =sumOfNumbers(3, 22, 5, 10, true, 30);
var test4 =sumOfNumbers(33);
var test5 =sumOfNumbers(33.2, 402);

console.log(assertEqual( test1, 7));
console.log(assertEqual( test2, 0));
console.log(assertEqual( test3, 70));
console.log(assertEqual( test4, 33));
