function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true; // Divisible by 400, so it's a leap year
      } else {
        return false; // Divisible by 100 but not by 400, not a leap year
      }
    } else {
      return true; // Divisible by 4 but not by 100, so it's a leap year
    }
  } else {
    return false; // Not divisible by 4, so it's not a leap year
  }
}

// Example usage:
console.log(isLeapYear(2024)); // true
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(2000)); // true
console.log(isLeapYear(2023)); // false

// Write a program that prompts the user to enter their age and then determines the price of a movie ticket based on the following criteria:
// Prompt the user to enter their age
let age = prompt("Enter your age:");

// Convert age to a number
age = Number(age);

// Initialize a variable for the ticket price
let ticketPrice;

// Determine the ticket price based on age
if (age <= 12) {
    ticketPrice = 10;   // Children
} else if (age >= 13 && age <= 17) {
    ticketPrice = 15;   // Teenagers
} else if (age >= 18) {
    ticketPrice = 20;   // Adults
} else {
    ticketPrice = "Invalid age"; // Handle invalid input
}

// Display the ticket price
alert("Your movie ticket price is: $" + ticketPrice);

//Fibonacci Sequence:
function fibonacci(n) {
    if (n <= 1) {
        return n;  // Base cases: F(0) = 0, F(1) = 1
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);  // Recursive case
    }
}

// Example usage:
console.log(fibonacci(6));  // Output: 8
console.log(fibonacci(10)); // Output: 55

//Palindrome Checker:

function isPalindrome(str) {
    // Remove spaces, punctuation, and convert to lowercase
    str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    // Helper recursive function
    function checkPalindrome(start, end) {
        if (start >= end) {
            return true;  // Base case: All characters matched
        }
        if (str[start] !== str[end]) {
            return false; // Characters at start and end don't match
        }
        return checkPalindrome(start + 1, end - 1); // Move inward
    }

    return checkPalindrome(0, str.length - 1);
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
console.log(isPalindrome("racecar"));                        // Output: true
console.log(isPalindrome("hello"));                          // Output: false
