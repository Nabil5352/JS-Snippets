/*
Problem statement:
Write a function that takes a string and a character as its argument,
and returns a number that indicates how many uppercase of that character
are in the string.

*/

function findChar(string_val, findchar){
	var str_length = string_val.length;
	var counter = 0;

	for (var i = 0; i <= str_length - 1; i++) {
		if(string_val.charAt(i) == findchar)
			counter += 1;
	}

	return counter;
}

console.log(findChar("Nabil Ahmad", "a"));