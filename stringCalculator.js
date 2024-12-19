// stringCalculator.js

function add(numbers) {
    if (!numbers) return 0;
    let delimiter = /[\n,]/; // Default delimiters: newlines and commas
    let numberString = numbers;
  
    // Check for custom delimiter
    if (numbers.startsWith("//")) {
      const delimiterMatch = numbers.match(/^\/\/(.)\n/); // Match "//[delimiter]\n"
      console.log('delimiter match : ', delimiterMatch)
      if (delimiterMatch) {
        const customDelimiter = delimiterMatch[1]; // Extract custom delimiter
        delimiter = new RegExp(`[\\n,${customDelimiter}]`); // Combine custom and default delimiters
        numberString = numbers.slice(delimiterMatch[0].length); // Remove delimiter declaration
      }
    }
  
    const numbersArray = numberString
                          .split(delimiter)
                          .filter(num => num.trim() !== "") // Filter out empty or invalid strings
                          .map(num => parseInt(num, 10)) // Convert to integers

    // Check for negative numbers
    const negativeNumbers = numbersArray.filter(num => num < 0);
    if (negativeNumbers.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(", ")}`);
    }
    return numbersArray.reduce((sum, current) => sum + current, 0); // Sum up the numbers

  }
  
  module.exports = add;
  