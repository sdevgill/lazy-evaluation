class Lazy {
  // Constructor to initialize an empty array to store functions and their arguments
  constructor() {
    this.functions = [];
  }

  // Method to add functions and their arguments to the array
  add(fn, ...args) {
    this.functions.push({ fn, args });
    return this;
  }

  // Evaluate method takes an array of functions and their arguments and evaluates them
  // in the order they were added, the item from the array is passed as the first argument
  // and the remaining arguments are passed when the function was added, returning the mapped array
  evaluate(target) {
    return target.map(item => {
      let results = item;
      this.functions.forEach(({ fn, args }) => {
        results = fn(results, ...args);
      });
      return results;
    });
  }
}


const computation = new Lazy();

console.log(computation
  .add(function timesTwo(a) { return a * 2; }) // simple function
  .add(function plus(a, b) { return a + b; }, 1) // plus function that will be given 1 as its first arg
  .evaluate([1, 2, 3])); // returns [3, 5, 7]


// Export the Lazy class
module.exports = Lazy;
