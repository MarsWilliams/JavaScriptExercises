function sayHi(x) {
    function gre2(y) {
        function gre3(z) {
            return (x + " " + y + " " + z);
        }
        return gre3;
    }
    return gre2;
}

//compares two parameters, and if they are not equal, returns an error
function assertEqual(a, b, message) {
    if (a == b) return true;
    throw new Error(message + " mismatch: " + a + " != " + b);
}

var test1 = sayHi('hello')('there')('world');
var test2 = sayHi('celebrate')('the')('day');
var test3 = sayHi('I')('heart')('closures');

console.log(assertEqual( test1, 'hello there world'));
console.log(assertEqual( test2, 'celebrate the day'));
console.log(assertEqual( test3, 'I heart closures'));