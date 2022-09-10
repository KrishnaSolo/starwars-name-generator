# starwars-name-generator

Toy project to explore releasing and testing npm packages

[![circleci build](https://img.shields.io/circleci/build/github/KrishnaSolo/starwars-name-generator/main?style=flat-square&token=10adc38ea9b6cdbf1143b2fc7b8f6ee37cebe681)](https://app.circleci.com/pipelines/github/KrishnaSolo/starwars-name-generator)
![Code Coverage](https://img.shields.io/codecov/c/github/KrishnaSolo/starwars-name-generator?style=flat-square)
![Version](https://img.shields.io/npm/v/@ksolo/starwars-name-generator?style=flat-square)
![Size](https://img.shields.io/bundlephobia/min/@ksolo/starwars-name-generator?style=flat-square)
![MIT](https://img.shields.io/github/license/KrishnaSolo/starwars-name-generator?style=flat-square)

## Installation

This package is avail via npm:

```
npm i @ksolo/starwars-name-generator
```

## Usage

```javascript
var names = require('starwars-names');
var allNames = names.all;
var randomName = names.random();
var threeRandomNames = names.random(3);
```
