/*
Problem statement:

A list is a nested set of objects, with the first object holding a reference to the second,
the second to the third, and so on.

sample list structure:
----------------------
var list = {
	value: 1,
	rest: {
		value: 2,
		rest: {
			value: 3,
			rest: null
		}
	}
}

Write a function arrayToList that builds up a data structure like the previous one when given
[1,2,3] as an argument, and write a listToArray function that produces an array from a list.

Also write the helper functions prepend, which takes an element and a list and creates a new 
list that adds the element to the front of the input list, and nth, which takes a list and a
number and returns the element at the given position in the list, or underfined where there 
is no such element. If you haven't already, also write a recursive version of nth.

*/

