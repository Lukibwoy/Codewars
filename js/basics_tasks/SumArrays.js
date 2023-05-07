// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
// Examples

// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Sum Numbers
function sum (numbers) {
    "use strict";
return numbers.reduce((acc, curr)=>acc+curr, 0) 
};

// alternative by using basic methods

function sum(numbers){
    "use strict";
    let res = 0;
    for(let i=0; i<numbers.length; i++){
    res = res + numbers[i]
    }
    return res
    }
    
    
    