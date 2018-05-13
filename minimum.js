/*
ProWriteblem statement:
Write a raw function that work same as Math.min
*/

function findminimum(param1, param2){
	if(param1 != param2)
		if(param1 < param2)
			return param1
		else
			return param2
	else
		return "Both are same";
}

console.log(findminimum(0,0));
console.log(findminimum(5,1));
console.log(findminimum(1,5));
console.log(findminimum(-5,1));
console.log(findminimum(5,-1));
console.log(findminimum(-5,-1));