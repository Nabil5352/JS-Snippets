/*
Problem statement:
Check if the number is even or odd.
=> Zero is even
=> One is odd
=> For any other number N, its evenness is the same as N-2

Define a recursive function isEvent corresponding to this discription.
The function should accept a number parameter and return a Boolean.

Test case - Test case output
---------   ----------------
50				true
75				false
-1				true

*/

function isEven(number){

	if(number === 0)
		return true
	else if(number === 1)
		return false
	else if(number < 0)
		return isEven(-number)
	else
		return isEven(number - 2)
}

console.log(isEven(-1));