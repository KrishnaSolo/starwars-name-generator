"use strict";

const uniqueRandomArray = require("unique-random-array");
const starWarsNames = require("./data/starwars-names.json");

module.exports = {
  all: starWarsNames,
  random: uniqueRandomArray(starWarsNames),
};
