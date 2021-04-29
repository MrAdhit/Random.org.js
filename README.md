# Random.org.js
 Random.org API for Node.JS

# Examples
## Usage
```js
const Random = require("random.org-javascript");

// Generating True Integer
Random.generateInteger(0, 500, 10, "Decimal").then(response => {
    console.log(response)
});

// Generating Integer Sequences
Random.generateIntegerSequences(10, 30).then(response => {
    console.log(response)
});

// Generating True Random String
Random.generateStrings(10, 5, false, false, true, false).then(response => {
    console.log(response)
})

// Getting Request Quota
Random.getQuota().then(response => {
    console.log(response)
});
```

# Documentation

## `async generateInteger(min, max, amount, format)`

Generates true random integers within a user-defined range

 * **Parameters:**
   * `min` — `number` — The smallest value allowed for each integer.
   * `max` — `number` — The largest value allowed for each integer.
   * `[amount]` — `number` — The number of integers requested.
   * `{("Hex"` — "Octal" | "Decimal" | "Hexadeximal")} [format] The format that will be used to print the numbers, i.e., binary, octal, decimal or hexadecimal.
 * **Returns:** `Promise<Array<number>>` — 

## `async generateIntegerSequences(min, max)`

Generates uniform or multiform sequences of true random integers within user-defined ranges.

 * **Parameters:**
   * `min` — `number` — The lower bound of the interval (inclusive).
   * `max` — `number` — The upper bound of the interval (inclusive).
 * **Returns:** `Promise<Array<number>>` — 

## `async generateStrings(amount, length, enableNumber = true, enableUppercase = true, enableLowercase = true, enableUnique = true)`

Generates true random strings.

 * **Parameters:**
   * `amount` — `number` — The number of strings requested.
   * `length` — `number` — The length of the strings. All the strings produced will have the same length.
   * `[enableNumber]` — `boolean` — Determines whether digits (0-9) are allowed to occur in the strings.
   * `[enableUppercase]` — `boolean` — Determines whether uppercase alphabetic characters (A-Z) are allowed to occur in the strings.
   * `[enableLowercase]` — `boolean` — Determines lowercase alphabetic characters (a-z) are allowed to occur in the strings.
   * `[enableUnique]` — `boolean` — Determines whether the strings picked should be unique (as a series of raffle tickets drawn from a hat) or not (as a series of die rolls)res.status(200).send('ok :)')
 * **Returns:** `Promise<Array<string>>` — 

## `async getQuota()`

This allows you to examine your quota at any point in time. The quota system works on the basis of IP addresses. Each IP address has a base quota of 1,000,000 bits. When your client makes a request for random numbers (or strings, etc.), the server deducts the number of bits it took to satisfy your request from the quota associated with your client's IP address.

 * **Returns:** `Promise<number>` — 