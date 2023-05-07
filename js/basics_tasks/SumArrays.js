// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
// Examples

// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Sum Numbers
function sum(numbers) {
	'use strict'
	return numbers.reduce((acc, curr) => acc + curr, 0)
}

// alternative by using basic methods

function sum(numbers) {
	'use strict'
	let res = 0
	for (let i = 0; i < numbers.length; i++) {
		res = res + numbers[i]
	}
	return res
}

// Calculate average

// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function findAverage(array) {
	if (array.length === 0) return 0

	return array.reduce((acc, curr) => acc + curr, 0) / array.length
}

findAverage([1, 2, 3, 4, 5])

// Sum of positive

// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20


function positiveSum(arr) {
	let sum = 0
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > 0) {
			sum += arr[i]
		}
	}
	return sum
}
