// -> Define two constructor functions: 'Robot' and 'Vehicle'
function Robot() {
	this.__proto__ = Robot.prototype;
}
function Vehicle() {
	this.__proto__ = Object.prototype;
}
// -> When called with 'new', the Robot constructor function should return 
//    the implicit 'this'
// -> When called with 'new', the Vehicle constructor function should return 
//    an object of your own making, not the implicit 'this'.

__


// ------------------------------------------------
// Common JS exports for verification, don't modify
module.exports = {
	Robot:    Robot,
	Vehicle:  Vehicle
}
