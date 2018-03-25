/*
Problem statement:
Write a program that creates a string that represnts and 8x8, using newline 
characters to separate lines. At each position of the grid there is either 
a space or a "#" character.
The characters should form a chess board.
Passing the string to console.log should show something like this:

# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
*/

console.log("Program: CHESS BOARD\n---------------------");
console.log("\n");

var size = 8;

var board = "";

for (var i = 0; i < size; i++) {
	for (var j = 0; j < size; j++) {
		if((i+j)%2 == 0)
			board += " ";
		else
			board += "#";
	}
	board += "\n";
};

console.log(board);