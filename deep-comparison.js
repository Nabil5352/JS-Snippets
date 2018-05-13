/*
Problem statement:

The == operator compares object by identity. But sometimes you would prefer
to compare the values of their actual properties.

Write a function, deepEqual, that takes two values and returns true only of
they are the same value or are objects with the same properties whose values
are also equal when compared with a recursive call to deepEqual.

To find out whether to compare two things by identity (use the === operator)
for that) or by looking at their properties, you can use the typeof operator.
If it produces "object" for both values, you should do a deep comparison.

But you have to take one silly exception into account: by a historical accident,
typeof null also produces "object".

*/

Object.size = function (obj){
	size = 0;
	for (key in obj){
		if(obj.hasOwnProperty(key)) size++;
	}
	return size;
}

function deepEqual(value1, value2){
	if ( value1 !== null || value2 !== null ){
		if ( typeof value1 === "object" && typeof value2 === "object" ){
			if(Object.size(value1) == Object.size(value2)){
				count = 0;
				for(key in value1){
					if(value2.hasOwnProperty(key) && value1[key] == value2[key]) count++;
				}
				if(count == Object.size(value1)){
					console.log("Equal");
				}else{
					console.log("Not Equal");
				}
			}else{
				console.log("Not Equal");
			}
		}
	}
}

var obj = {here: {is: "an"}, object: 2};

var x = {a: 1, b: 2}
var y = {b: 2, a: 1}

var m = {a: 1, b: 2}
var n = {b: 1, a: 2}

var a = {a: 1, b: 2, c: 3}
var b = {b: 1, a: 2}

var e = {a: null, b: 2}
var f = {b: 1, a: 2}

deepEqual(x, y)
deepEqual(m, n)
deepEqual(a, b)
deepEqual(e, f)

deepEqual(obj, obj);
deepEqual(obj, {here: 1, object: 2});
deepEqual(obj, {here: {is: "an"}, object: 2});