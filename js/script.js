// Rock Paper Scissors

// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

const rps = (p1, p2) => {
	if (p1 === 'scissors' && p2 === 'paper') {
		return 'Player 1 won!'
	}
	if (p1 === 'scissors' && p2 === 'rock') {
		return 'Player 2 won!'
	}
	if (p1 === 'paper' && p2 === 'rock') {
		return 'Player 1 won!'
	}
	if (p1 === 'paper' && p2 === 'scissors') {
		return 'Player 2 won!'
	}
	if (p1 === 'rock' && p2 === 'paper') {
		return 'Player 2 won!'
	}
	if (p1 === 'rock' && p2 === 'scissors') {
		return 'Player 1 won!'
	}
	if (p1 === p2) {
		return 'Draw!'
	}
}

console.log(rps('rock', 'paper'))

// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

function isTriangle(a, b, c) {
	if (a <= 0 || b <= 0 || c <= 0) {
		return false
	}

	if (a + b <= c) {
		return false
	}
	if (a + c <= b) {
		return false
	}
	if (b + c <= a) {
		return false
	} else {
		return true
	}
}

isTriangle(2, 1, 5)

// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

function greet(name, owner) {
	if (name === owner) return 'Hello boss'
	return 'Hello guest'
}

//   The Story:

//   Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.
//   Task Overview:

//   You have to write a function that accepts three parameters:

//       cap is the amount of people the bus can hold excluding the driver.
//       on is the number of people on the bus excluding the driver.
//       wait is the number of people waiting to get on to the bus excluding the driver.

//   If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.
//   Usage Examples:

//   cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
//   cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting

function enough(cap, on, wait) {
	if (cap - (on + wait) >= 0) {
		return 0
	} else {
		return on + wait - cap
	}
}


// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"

// Names given are always valid strings.


function areYouPlayingBanjo(name) {
    if(name[0]==='R'|| name[0]==='r'){
      return `${name} plays banjo`
    }
      return `${name} does not play banjo`
    }

    

// Introduction

// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
// Task

// Given a year, return the century it is in.
// Examples

// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

function century(year) {
	return Math.ceil(year/100)
	}

	console.log(century(1023));
	

	// Find Maximum and Minimum Values of a List
	// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.
	// Examples (Input -> Output)

	const min = (list) => {
		return Math.min(...list)
	}
	
	const max = (list) => {
		
	   return Math.max(...list)
	}	

	
	// Simple multiplication
	
	// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
	

	function simpleMultiplication(number) {
		if(number%2===0){
		  return number*8
		}else{
		  return number*9
		}
	}

// 	Counting sheep...
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

	function countSheeps(arrayOfSheep) {
		let Sheep = 0
		for(let i=0; i<arrayOfSheep.length; i++){
		  if (arrayOfSheep[i] === true){
			Sheep++;
		  }
		}
		return Sheep;
	  }
	  
	  
// 	  Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []


// by map

function invert(array) {
	return array.map((number) => number * -1)
  }

// by for

function invert(array) {
	var newArr = []
	for(let i =0; i<array.length;i++){
	  newArr.push(-array[i])
	}
	  return newArr
	}