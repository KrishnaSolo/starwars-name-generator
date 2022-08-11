"use strict";

const expect = require("chai").expect;
const starwars = require("./index");

describe("starwars-names", function () {
  describe("all", function () {
    it("should return an array of strings", function () {
      expect(starwars.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every((item) => {
          return typeof item == "string";
        });
      }
    });

    it("should include Luke Skywalker", function () {
      expect(starwars.all).to.include("Luke Skywalker");
    });
  });

  describe("random", function () {
    it("should return a random name", function () {
      const randomName = starwars.random();
      expect(starwars.all).to.include(randomName);
    });
  });
});
