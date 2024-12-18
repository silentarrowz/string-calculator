// stringCalculator.test.js

const add = require('./stringCalculator');

describe('String Calculator', () => {
  test('returns 0 for an empty string', () => {
    expect(add("")).toBe(0);
  });

  test('returns the number itself when there is only one number', () => {
    expect(add("1")).toBe(1);
    expect(add("5")).toBe(5);
  });

  test('returns the sum of two numbers', () => {
    expect(add("1,5")).toBe(6);
    expect(add("2,3")).toBe(5);
  });

  test('returns the sum of multiple numbers', () => {
    expect(add("1,2,3")).toBe(6);
    expect(add("4,5,6")).toBe(15);
  });
});
