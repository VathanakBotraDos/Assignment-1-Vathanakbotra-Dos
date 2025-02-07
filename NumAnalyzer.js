"use strict"; // I use this  mode to avoid bugs on a non-declared variable

// the main function that performs the analysis on the given number.
function numberAnalyzer(num) {
  let results = []; // Array to store our output strings.

  try {
		// this if statement use for checking invalid input
    if (typeof num !== 'number' || isNaN(num)) {
      throw new Error("Invalid input: Please enter a valid number.");
    }
    results.push(`Input is ${num}.`);

		// conditional statement
		// I want to convert every negative num to positive for this program
    if (num < 0) {
      results.push(`Input ${num} is negative. Converting to positive.`);
      num = Math.abs(num);
    } else {
      results.push(`Input ${num} is non-negative.`);
    }

    // Use a switch statement (with 'true') to categorize the number.
    switch (true) {
      case (num < 10):
        results.push("The number is less than 10.");
        break;
      case (num < 100):
        results.push("The number is between 10 and 99.");
        break;
      default:
        results.push("The number is 100 or greater.");
        break;
    }

    // For Loop with Jumping Statements 
    results.push(`\nFor Loop: Listing even numbers from 1 to ${num} (skipping number that can be divided by 3):`);
    for (let i = 1; i <= num; i++) {
      // Use 'continue' to skip numbers that can be divided by 3.
      if (i % 3 === 0) {
        continue;
      }
      // Print even numbers.
      if (i % 2 === 0) {
        results.push(`${i} is even.`);
      }
    }

    // while Loop with Jumping Statements 
    results.push(`\nWhile Loop: Counting down from ${num} to 1 (breaking when count equals 3):`);
    let count = num;
    while (count > 0) {
      // Use 'break' to exit early if the count equals 3.
      if (count === 3 ) {
        results.push("Reached 3, exiting the countdown early.");
        break;
      }
      results.push(`Count: ${count}`);
      count--;
    }
  } catch (error) {
    //  Error Handling 
    results.push("An error occurred: " + error.message);
  }

  // Return the results as a single string.
  return results.join("\n");
}

// DOM Interaction 
// 1. Wait for the user to click the "Analyze" button.
document.getElementById("analyzeBtn").addEventListener("click", function() {
  // 2. Get the user input from the text field.
  let inputField = document.getElementById("numberInput").value;
  let num = Number(inputField);

  // 3. then run the analysis.
  let output = numberAnalyzer(num);

  // 4. finally, display the output in the <pre> element.
  document.getElementById("results").textContent = output;
});

