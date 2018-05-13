/*
Problem statement:
Write two functions, reverseArray and reverseArrayInPlace.

The first, reverseArray, takes an array as an argument and produces
a new array that has the same elements in the reverse order.

The second, reverseArrayInPlace, does what the reverse method does:
it modifies the array given as argument in order to reverse its elements.
*/

function reverseArray(array){
	var new_array = [];
	for(var i= array.length-1; i >=0; i--)
		new_array.push(array[i]);

	return new_array;
}

function reverseArrayInPlace(array){

	for (var i = 0; i < Math.floor(array.length /2); i++) {
		// swap
		var temp = array[i]
		array[i] = array[array.length - 1 - i]
		array[array.length - 1 - i] = temp;
	}

	return array;
}

var test_array = ["L", "I", "B", "A", "N"];

console.log(reverseArray(test_array));
console.log(reverseArrayInPlace(test_array));