/*
Problem statement:
Write a program that uses console.log to print all the numbers from 1 to 100,
with two exceptions. For numbers divisible by 3, print "Fizz" instead of the
number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
Print "FizzBuzz" for members that are divisible by both 3 and 5.
*/

console.log("Program: FIZZBUZZ\n-------------------------");
console.log("\n");

//First approach
for (var i = 1; i <= 100; i++) {
	if(i%5 == 0 & i%3 == 0){
		console.log("FizzBuzz");
	}else if(i%3 == 0){
		console.log("Fizz");
	}else if(i%5 == 0){
		console.log("Buzz");
	}else{
		console.log(i);
	}
};

console.log("\n");

//Second approach
for (var j = 1; j <= 100; j++) {
	var output = "";
	if(j%3 == 0)
		output += "Fizz";
	if(j%5 == 0)
		output += "Buzz";
	console.log(output || j);
};