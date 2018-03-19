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