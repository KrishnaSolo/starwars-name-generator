"use strict";

import uniqueRandomArray from "unique-random-array";
import starWarsNames from "./data/starwars-names.json";
const getRandomName = uniqueRandomArray(starWarsNames);

export const all = starWarsNames;
export const random = randomGen;

function randomGen(num) {
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
