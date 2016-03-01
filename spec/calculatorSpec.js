var calcModel = require('../models/calculator.js');

describe("Calculator", function() {
  var calculator;

  beforeEach(function() {
    calculator = new calcModel();
  });

  it("should be able to add 1 and 2", function() {
    expect(calculator.add(1,2)).toEqual(3);
  });

  it("should be able to subtract 2 from 1", function() {
    expect(calculator.subtract(1,2)).toEqual(-1);
  });

  it("should be able to multiply 1 and 2", function() {
    expect(calculator.multiply(1,2)).toEqual(2);
  });

  it("should be able to divide 1 by 2", function() {
    expect(calculator.divide(1,2)).toEqual(0.5);
  });

});
