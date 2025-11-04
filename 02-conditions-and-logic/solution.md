## 1. Find the Maximum of Three Numbers

```js
function maxOfThree(a, b, c) {
  let max;

  if (a >= b && a >= c) {
    max = a;
  } else if (b >= c) {
    max = b;
  } else {
    max = c;
  }
  return max;
}
```

---

## 2. Check if a Number is Positive, Negative, or Zero

```js
function checkPositiveOrNegative(num = 0) {
  if (num > 0) {
    return 'Positive';
  } else if (num < 0) {
    return 'Negative';
  }
  return 'Zero';
}
```

---

## 3. Calculate Electricity Bill
Input: Units = 230

Output: Total Bill = ₹1500

✨ Applies multiple ranges using chained else if and cumulative logic.

Example Logic:

0–100 units → ₹5 per unit
101–200 units → ₹7 per unit
201–300 units → ₹10 per unit
Above 300 units → ₹12 per unit
🔍 Teaches: cumulative calculation + condition chaining.

```js
function calculateElectricityBill(units) {
  let total = 0;

  if (units <= 100) {
    total = units * 5;
  } else if (units <= 200) {
    total = (100 * 5) + (units - 100) * 7;
  } else if (units <= 300) {
    total = (100 * 5) + (100 * 7) + (units - 200) * 10;
  } else {
    total = (100 * 5) + (100 * 7) + (100 * 10) + (units - 300) * 12;
  }

  return total;
}
```

---

## 4. Check if a Character is a Vowel or Consonant

```js
function checkVowel(char = '0') {
  if ('aeiou'.includes(char.toLowerCase()) && char !== '') {
    return 'Vowel';
  } else if (/[a-z]/.test(char.toLowerCase())) {
    return 'Consonant';
  }
  return 'Not a valid alphabet';
}
```

---

## 5. Check if a Year is a Leap Year

```js
function isLeapYear(year) {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    return true;
  }
  return false;
}
```