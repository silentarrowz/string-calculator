// stringCalculator.js

function add(numbers) {
  if (!numbers) return 0;
  let delimiter = /[\n,]/; // Default delimiters: newlines and commas
  let numberString = numbers;
  let customDelimiter;
  // Check for custom delimiter
  if (numbers.startsWith("//")) {
    const customDelimiterPattern = "/^\/\/(.)\n/";
    const delimiterMatch = numbers.match(customDelimiterPattern); 
    console.log("delimiter match : ", delimiterMatch);
    if (delimiterMatch) {
      customDelimiter = delimiterMatch[1]; // Extract custom delimiter
      delimiter = new RegExp(`[\\n,${customDelimiter}]`); // Combine custom and default delimiters
      numberString = numbers.slice(delimiterMatch[0].length); // Remove delimiter declaration
    }
  }

  console.log("numbers : ", numbers);
  const numbersArray = numberString
    .split(delimiter)
    .filter((num) => num.trim() !== "") // Filter out empty or invalid strings
    .map((num) => parseInt(num, 10)); // Convert to integers

  // Check for negative numbers
  const negativeNumbers = numbersArray.filter((num) => num < 0);
  if (negativeNumbers.length > 0) {
    throw new Error(
      `Negative numbers not allowed: ${negativeNumbers.join(", ")}`
    );
  }
  if (customDelimiter === "*") {
    return numbersArray.reduce((product, current) => product * current, 1);
  }
  return numbersArray.reduce((sum, current) => sum + current, 0); // Sum up the numbers
}

module.exports = add;
