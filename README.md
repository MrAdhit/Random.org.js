# random.org.js ![NPM Version](https://img.shields.io/npm/v/random.org-javascript?style=flat-square) ![Build Status](https://img.shields.io/github/workflow/status/MrAdhit/Random.org.js/Basic%20Test?style=flat-square) ![Dependencies](https://img.shields.io/david/mradhit/random.org.js?style=flat-square)



## Table of Contents
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
- [API](#api)
    - [`generateInteger(min, max, amount, format)`](#generateintegermin-max-amount-format)
    - [`generateIntegerSequences(min, max)`](#generateintegersequencesmin-max)
    - [`generateStrings(amount, length, enableNumber?, enableUppercase?, enableLowercase?, enableUnique?)`](#generatestringsamount-length-enablenumber-enableuppercase-enablelowercase-enableunique)
    - [`getQuota()`](#getquota)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


## Installation

Install with [npm](https://www.npmjs.com/package/random.org-javascript)

```
$ npm install random.org-javascript
```



## Usage

**ES6**

```javascript
import random from "random.org-javascript";
```

**CommonJS**

```javascript
const random = require("random.org-javascript");
```



**Basic Example**

You can use Promise

```javascript
random.generateInteger(1, 50, 10, "Decimal").then(response => {
    console.log(response); // => Array<number>[10]
}).catch(error => {
    console.log(error);
});
```

or async

```javascript
try {
    let response = await random.generateInteger(10, 50, 10, "Decimal")
    console.log(response); // => Array<number>[10]
} catch (error) {
    console.log(error);
}
```



## Examples

**Generating Random Number**

```javascript
random.generateInteger(1, 50, 10, "Decimal").then(response => {
    console.log(response); // => Array<number>[10]
}).catch(error => {
    console.log(error);
});
```



**Generating Random Number Sequence**

```javascript
random.generateIntegerSequences(1, 50).then(response => {
    console.log(response); // => Array<number>[50]
}).catch(error => {
    console.log(error);
});
```



**Generating Random String**

```javascript
random.generateStrings(10, 5).then(response => {
    console.log(response); // => Array<string[5]>[10]
}).catch(error => {
    console.log(error);
});
```



**Getting Quota**

```javascript
random.getQuota().then(response => {
    console.log(response); // => 1000000 (If you have not generated anything yet)
}).catch(error => {
    console.log(error);
});
```



## API

#### `generateInteger(min, max, amount, format)`

Generates true random integers within a user-defined range

* **Parameters:**
    * `min` — `number` — The smallest value allowed for each integer.
    * `max` — `number` — The largest value allowed for each integer.
    * `amount` — `number[optional]` — The number of integers requested.
    * `format` — `string[optional]` — The format that will be used to print the numbers, i.e., binary, octal, decimal or hexadecimal.
 * **Returns:** `Promise<Array<number>>` — Promise Array of number.



#### `generateIntegerSequences(min, max)`

Generates uniform or multiform sequences of true random integers within user-defined ranges.

* **Parameters:**
    * `min` — `number` — The lower bound of the interval (inclusive).
    * `max` — `number` — The upper bound of the interval (inclusive).
 * **Returns:** `Promise<Array<number>>` — Promise Array of number.



#### `generateStrings(amount, length, enableNumber?, enableUppercase?, enableLowercase?, enableUnique?)`

Generates true random strings.

 * **Parameters:**
   * `amount` — `number` — The number of strings requested.
   * `length` — `number` — The length of the strings. All the strings produced will have the same length.
   * `enableNumbee` — `boolean[optional: true]` — Determines whether digits (0-9) are allowed to occur in the strings.
   * `enableUppercase` — `boolean[optional: true]` — Determines whether uppercase alphabetic characters (A-Z) are allowed to occur in the strings.
   * `enableLowercase` — `boolean[optional]: true` — Determines lowercase alphabetic characters (a-z) are allowed to occur in the strings.
   * `enableUnique` — `boolean[optional: true]` — Determines whether the strings picked should be unique (as a series of raffle tickets drawn from a hat) or not (as a series of die rolls).
 * **Returns:** `Promise<Array<string>>` — Promise Array of String.



#### `getQuota()`

This allows you to examine your quota at any point in time. The quota system works on the basis of IP addresses. Each IP address has a base quota of 1,000,000 bits. When your client makes a request for random numbers (or strings, etc.), the server deducts the number of bits it took to satisfy your request from the quota associated with your client's IP address.

* **Returns:** `Promise<number>` — Promise Number
