# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @anthonykao10/lotide`

**Require it:**

`const _ = require('@anthonykao10/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: returns the first item in an array.
* `tail(array)`: returns everything except for the first element in an array.
* `middle(array)`: returns the middle-most element(s) of a given array.
* `countLetters(string)`: returns an object containing the frequency of each letter in input string.
* `countOnly(allItems, itemsToCount)`: given an array of items, returns the counts for a specific subset of those items.
* `eqArrays(array1, array2)`: returns true if two arrays are the same (deep).
* `eqObjects(object2, object2)`: returns true if two objects are the same (deep).
* `findKey(object, callback)`: given an object and a callback, returns the first key for which the callback returns a truthy value. (Returns undefined if no match is found).
* `findKeyByValue(object, value)`: given an object and a value, returns the first key which contains the given value. (Returns undefined if no match is found).
* `flatten(array)`: given an array of arrays, return the array flattened to 1-dimension (only supports a single level of nesting).
* `letterPositions(string)`: returns an object of arrays, which contain all the indices (zero-based positions) in the input string where each character is found. (Array stores each occurrence of a letter).
* `map(array, callback)`: return a new array with each element transformed through the callback.
* `takeUntil(array, callback)`: given an array and callback, passes each element of the array into the callback, returning all elements until the callback returns a 'truthy' value.
* `without(source, itemsToRemove)`: returns a subset of a given array, removing unwanted elements.