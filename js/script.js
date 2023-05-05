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

    