// 1. Find the Maximum of Three Numbers

// Input: 10 20 5
// Output: 20
// ✨ Teaches nested or chained conditional logic and comparative reasoning.

function maximunNumber(a, b, c) {
    if (a > b && a > c) {
        console.log(`max value (a) = ${a}`);

    } if (b > c) {
        console.log(`max value (b) = ${b}`);
    } else {
        console.log(`max value (c) = ${c}`);
    }
}
maximunNumber(10, 20, 5)



// 2. Check if a Number is Positive, Negative, or Zero

// Input: -9
// Output: Negative
// ✨ Practices multi-branch conditions and comparison operators.


function numberPositiveNegativeZero(num) {
    if (num > 0) {
        console.log(`${num} is positive`);

    } else if (num < 0) {
        console.log(`${num} is negative`);
    } else {
        console.log(`${num} is zero`);
    }
}

numberPositiveNegativeZero(-9)



// 3. Calculate Electricity Bill
// Input: Units = 230

// Output: Total Bill = ₹1500

// ✨ Applies multiple ranges using chained else if and cumulative logic.

// Example Logic:

// 0–100 units → ₹5 per unit
// 101–200 units → ₹7 per unit
// 201–300 units → ₹10 per unit
// Above 300 units → ₹12 per unit
// 🔍 Teaches: cumulative calculation + condition chaining.


function calculateElectricityBill(units) {

    let totalBill;

    if (units <= 100) {
        totalBill = 100 * 5
    } else if (units <= 200) {
        totalBill = (100 * 5) + (units - 100) * 7
    } else if (units <= 300) {
        totalBill = (100 * 5) + (100 * 7) + (units - 200) * 10
    } else {
        totalBill = (100 * 5) + (100 * 7) + (100 * 10) + (units - 300) * 12
    }

    return totalBill
}

console.log(calculateElectricityBill(230));




// 4. Check if a Character is a Vowel or Consonant

// Input: e
// Output: Vowel
// ✨ Combines logical OR (||) operator and string comparisons.


function vowelConsonant(char = "") {

    if ("aeiou".includes(char.toLowerCase()) && char != "") {
        return `${char} = Vowel`;
    } else if (/[a-z]/.test(char.toLowerCase())) { // regular expression
        return `${char} = Consonant`;
    }
    return `not a valid alphabet`
}

console.log(vowelConsonant("Z"));




// 5. Check if a Year is a Leap Year

// Input: 2024
// Output: Leap Year
// ✨ Builds compound condition logic using multiple if statements (%4, %100, %400).
// A year is a leap year if it satisfies these conditions:

// It is divisible by 4,
// ➜ year % 4 === 0
// But not divisible by 100,
// ➜ year % 100 !== 0
// Unless it is also divisible by 400,
// ➜ year % 400 === 0
// 🧩 In Simple Words

// If a year is divisible by 4, it’s a leap year.
// Except if it’s also divisible by 100, then it’s not a leap year.
// But if it’s divisible by 400, it is a leap year again.



function isLeapYear(year) {
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
        return true;
    }
    return false;
}

console.log(isLeapYear(2025));

