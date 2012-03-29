var rabbit = 1;
var i = 0;
var pair;

var f = function(x){
	pair = rabbit / 2;
	console.log("month = " + i + " num = " + rabbit + " pair = " + pair);
	rabbit += i;
	i++;

	if(x >= i){
		f(x);
	}
	
	return true;
}

f(12);