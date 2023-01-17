# Lazy

A simple JavaScript class that allows you to perform lazy evaluations of functions on an array of values.

## Installation

You can use git clone to get the source code:

```
git clone https://github.com/sdevgill/lazy-evaluation.git
```

Install the dependencies:

```
npm install
```


### Usage

To use the Lazy class, you first need to create an instance of it:

```
const computation = new Lazy();
```

You can then chain calls to the add method to add functions and their arguments to the computation:

```
computation.add(function timesTwo(a) { return a * 2; })
computation.add(function plus(a, b) { return a + b; }, 1)
```

Finally, you can call the evaluate method on the computation object, passing in the target array, to perform the computation:

```
computation.evaluate([1, 2, 3])
```

The functions will be applied in the order they were added, and the result will be an array containing the results of the computation.

### Testing

To run the tests, you can use the following command:

```
npm test
```


### Big O Notation

* The add method has a time complexity of O(1).
The evaluate method has a time complexity of O(n * m) where n is the size of the target array and m is the number of functions added to the Lazy class.
* The space complexity of the Lazy class is O(m) where m is the number of functions added.

### Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request.
