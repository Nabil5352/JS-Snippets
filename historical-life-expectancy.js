/*
Problem statement:
Data set: https://eloquentjavascript.net/2nd_edition/code/ancestry.js

When we looked up all the people in our data set that lived more than 90 years, only the latest generation in the data came out.
Lets take a closer look at that phenomenon.

Compute and output the average age of the people in the ancesty data set per country. A person is assigned to a country by
taking their year of death, dividing it by 100, and rounding it up, as in Math.ceil(person.died / 100).

For bonus points, write a function groupBy that abstracts the grouping operation. It should accept as arguments an array and a 
function that computes the group for an element in the array and returns an object that maps group names to arrays of group numbers.
*/