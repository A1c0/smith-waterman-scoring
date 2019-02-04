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

const array1 = 'Hello'.split('');
const array2 = 'Helo'.split('');
const options = {gap: -1, mismatch: -2, match: 2};

const result = smtihWaltermanScore(array1, array2, options);
console.log(result);
//=> result
```

