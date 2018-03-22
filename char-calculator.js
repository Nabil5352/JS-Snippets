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