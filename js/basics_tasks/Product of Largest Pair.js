// Rick wants a faster way to get the product of the largest pair in an array. Your task is to create a performant solution to find the product of the largest two integers in a unique array of positive numbers.
// All inputs will be valid.
// Passing [2, 6, 3] should return 18, the product of [6, 3].

function maxProduct(array) {
    if(array.length<2){
      return
    }
     return array.sort((a, b) => b - a).slice(0, 2).reduce((a, b) => a * b);
   }
   