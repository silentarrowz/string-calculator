// stringCalculator.js

function add(numbers) {
    if (!numbers) return 0;
  
    return numbers
      .split(',')
      .map(num => parseInt(num, 10))
      .reduce((sum, current) => sum + current, 0);
  }
  
  module.exports = add;
  