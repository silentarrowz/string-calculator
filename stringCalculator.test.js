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

  test('returns the sum of numbers separated by newlines', () => {
    expect(add("1\n2,3")).toBe(6);
    expect(add("4\n5\n6")).toBe(15);
  });

  test('handles a mix of commas and newlines', () => {
    expect(add("1,2\n3")).toBe(6);
    expect(add("7\n3,2")).toBe(12);
  });

  test('supports custom delimiters specified at the start', () => {
    expect(add("//;\n1;2")).toBe(3); // Custom delimiter ";"
    expect(add("//|\n3|4|5")).toBe(12); // Custom delimiter "|"
  });

  test('handles custom delimiters with mixed commas and newlines', () => {
    expect(add("//#\n1#2,3\n4")).toBe(10); // Custom delimiter "#"
  });

  test('handles custom delimiters with *', () => {
    expect(add("//*\n1*2*3*4")).toBe(24); 
  });

  test('throws exception for a single negative number', () => {
    expect(() => add("1,-2,3")).toThrow("Negative numbers not allowed: -2");
  });

  test('throws exception for multiple negative numbers', () => {
      expect(() => add("-1,2,-3")).toThrow("Negative numbers not allowed: -1, -3");
  });
});
