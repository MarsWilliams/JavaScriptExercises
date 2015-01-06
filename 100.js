// -> Define a 'Robot' function constructor
function Robot () {
	this.parts = [];
};

// -> Create two instances of Robot: 'robby' and 'cranky'
var robby = new Robot();
var cranky = new Robot(); 
// -> Both robby and cranky should respond to 'parts' and 'capabilities', these 
//    should be empty arrays at first

Robot.prototype.capabilities = [];

// -> Claim the result of robby.parts
claim(robby.parts, []);
// -> Claim the result of cranky.parts
claim(cranky.parts, []);
// -> Claim the result of robby.capabilities
claim(robby.capabilities, []);
// -> Claim the result of cranky.capabilities
claim(cranky.capabilities, []);

// -> Add 'core' to robby.parts, cranky.parts should still be empty
robby.parts = ['core'];
// -> Add 'fly' to robby.capabilities, after doing that cranky.capabilities must 
//    also have 'fly' without adding to it directly, so this property has to be 
//    shared
robby.capabilities.push('fly');

// -> Claim the result of robby.parts
claim(robby.parts, ['core']);
// -> Claim the result of cranky.parts
claim(cranky.parts, []);
// -> Claim the result of robby.capabilities
claim(robby.capabilities, ['fly']);
// -> Claim the result of cranky.capabilities
claim(cranky.capabilities, ['fly']);


// ------------------------------------------------
// Common JS exports for verification, don't modify
module.exports = {
	Robot:  Robot,
	robby:  robby,
	cranky: cranky
};
