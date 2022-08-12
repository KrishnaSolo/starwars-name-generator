"use strict";

import { expect } from "chai";
import { all, random } from "./index";

describe("starwars-names", function () {
  describe("all", function () {
    it("should return an array of strings", function () {
      expect(all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every((item) => {
          return typeof item == "string";
        });
      }
    });

    it("should include Luke Skywalker", function () {
      expect(all).to.include("Luke Skywalker");
    });
  });

  describe("random", function () {
    it("should return a random name", function () {
      const randomName = random();
      expect(all).to.include(randomName);
    });

    it("should return an array of random names given an addition number param", function () {
      const randomNames = random(5);
      expect(randomNames).to.have.length(5);

      randomNames.forEach((randomName) => expect(all).to.include(randomName));
    });
  });
});
