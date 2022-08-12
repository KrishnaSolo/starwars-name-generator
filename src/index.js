"use strict";

const uniqueRandomArray = require("unique-random-array");
const starWarsNames = require("./data/starwars-names.json");
const getRandomName = uniqueRandomArray(starWarsNames);

module.exports = {
  all: starWarsNames,
  random: random,
};

function random(num) {
  if (num === undefined) return getRandomName();
  else {
    const names = [];
    for (let index = 0; index < num; index++) {
      const name = getRandomName();
      names.push(name);
    }
    return names;
  }
}
