/*
Problem statement:
1. Write a range function that takes two arguments. start and end,
and returns an array containing all the numbers from start up to
(and including) end.

2. Next write a sum function that takes an array of numbers and returns
the sum of these numbers.

Sample program:
console.log(sum(range(1,10)))

Output:
55
*/

function this_range(start, end){
	var range = [];
	for(var i=start; i<=end; i++)
		range.push(i);

	return range;
}

function this_sum(num_array){
	var result = 0;
	for (var i = 0; i < num_array.length; i++)
		result += num_array[i];
	
	return result;
}

console.log(this_sum(this_range(1, 10)));