function capitalizeWords (array, index = 0) {
  // add whatever parameters you deem necessary - good luck!
  if(index == array.length) return [];
  else {
    return [array[index].toUpperCase()].concat(capitalizeWords(array, index + 1));
  }
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']

/*

Write a recursive function called capitalizeWords. 
Given an array of words, return a new array containing each word capitalized.

*/