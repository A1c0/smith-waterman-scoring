# Smith-Walterman Scoring

[![Build Status](https://travis-ci.com/A1c0/smith-walterman-score.svg?branch=master)](https://travis-ci.org/A1c0/smith-walterman-score) 
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo) 

This module is based on the [Smith–Waterman algorithm](https://en.wikipedia.org/wiki/Smith%E2%80%93Waterman_algorithm). 
This algorithm allows us to compute the alignment of two arrays of elements.

The origin source is [here](https://stackoverflow.com/questions/23400317/smith-waterman-algorithm-to-generate-matrix-in-python)

## Install

```
$ yarn add smith-walterman-score
```
or
```
$ npm install smith-walterman-score
```

## Usage

```js
const smtihWaltermanScore = require('smith-walterman-score');

const options = {gap: -1, mismatch: -2, match: 2};

// example to compare two words
const test1A = 'Hello'.split('');
const test1B = 'Helo'.split('');
const result1 = smtihWaltermanScore(test1A, test1B, options);
console.log(result1);
/*=> { finalQ: [ 'H', 'e', 'l', 'l', 'o' ],
       finalP: [ 'H', 'e', {}, 'l', 'o' ], // {} is a gap
       score: 7 }*/

// example to compare two sentences
const test2A = 'I\'m a little boy'.split(' ');
const test2B = 'I\'m a big boy'.split(' ');
const result2 = smtihWaltermanScore(test2A, test2B, options);
console.log(result2);
/*=> { finalQ: [ "I'm", 'a' ], 
       finalP: [ "I'm", 'a' ], 
       score: 4 }*/
```

