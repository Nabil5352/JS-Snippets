console.log("Program: LOOPING TRIANGLE\n-------------------------");
console.log("\n");

//First approach
var value = "#";
for (var i = 1; i <= 7; i++) {
	console.log(value.repeat(i));
};

console.log("\n");

//Second approach
for(var line = "#"; line.length <= 7; line +="#"){
	console.log(line);
}