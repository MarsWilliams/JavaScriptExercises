var total = 0;
var limit = 10;
function ram(){
	for (var i = 0; i < limit.length; i++){
	console.log(i);
	total += i;
	}
}
console.log(ram());