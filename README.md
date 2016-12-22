# empty-it
> Empties and optionally removes an element in the DOM-friendliest manner.


![100% test coverage](https://img.shields.io/badge/coverage-100%25-brightgreen.svg)

Removes all children from an element, optionally removing the element itself.
Any event listeners attached to the element or its children persist in memory, and therefore should be handled before calling to mitigate the risk of memory leaks.


## Installation
Install via npm:

```sh
$ npm i empty-it
```

## Usage
Exposed function requires its first parameter to be an element (the element to be emptied and possibly removed).
It accepts an optional second boolean parameter which determines if the element is to be removed after it is emptied.


```js
var emptyIt = require('empty-it');

// empty an element
emptyIt(document.getElementById('target1'));

// empty and delete element 
emptyIt(document.getElementById('target2'), true);

```
