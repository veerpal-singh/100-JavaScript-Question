## Questions List

### 1. Print Right-Angled Star Triangle

- **input :** <code>Rows = 5</code>

- **output :**

```js
*
**
***
****
*****

const row = 5;

for (let i = 1; i <= row; i++) {

    let str = ""

    for (let j = 1; j <= i; j++) {
        str += "*"
    }
    console.log(str);

}
```

- ✨ Teaches nested loops and increasing sequence printing.

---

### 2. Print Inverted Right-Angled Triangle

- **input :** <code>Rows = 5</code>

- **output :**

``` js
*****
****
***
**
*

const row = 5;

for (let i = row; i >= 1; i--) {

    let str = ''

    for (let j = i; j >= 1; j--) {
        str += '*'
    }

    console.log(str);

}
```

- ✨ Reinforces decreasing nested loop structure.

---

### 3. Print Pyramid Pattern

- **Input :** <code>Rows = 5</code>

- **Output :**

```js
    *
   ***
  *****
 *******
*********

const row = 5;

for (let i = 1; i <= 2 * row - 1; i += 2) {

    let str = ""

    const currentRow = ((i + 1) / 2);


    for (let j = 1; j <= row + currentRow - 1; j++) {

        if (j <= row - currentRow) {
            str += " "
        } else {
            str += "*"
        }
    }
    console.log(str);
}
```

- ✨ Teaches alignment using spaces and nested loops.

---

### 4. Print Inverted Pyramid Pattern

- **Input :** <code>Rows = 5</code>

- **Output :**

```js
*********
 *******
  *****
   ***
    *

const row = 5;

for (let i = 2 * row - 1; i >= 1; i -= 2) {

    let str = ""

    const currentRow = ((i + 1) / 2);


    for (let j = 1; j <= row + currentRow - 1; j++) {

        if (j <= row - currentRow) {
            str += " "
        } else {
            str += "*"
        }
    }
    console.log(str);
}
```

- ✨ Teaches reverse space-star pattern alignment.

---

### 5. Print Hollow Square Pattern

- **Input :** <code>Rows = 5</code>

- **Output :**

```js
*****
*   *
*   *
*   *
*****

const row = 6;

for(let i = 1; i <=row; i++) {
    let str = ''

    for(let j = 1; j <= row; j++) {
        if(i === 1 || i === row || j === 1 || j === row) {
            str = str + '*'
        } else {
            str = str + ' '
        }
    }
    console.log(str);
}
```

- ✨ Practices conditional printing within nested loops.

---

### 6. Print Hollow Pyramid Pattern

- **Input :** <code>Rows = 5</code>

- **Output :**

```js
    *
   * *
  *   *
 *     *
*********

const row = 5

for(let i = 1; i <= 2*row - 1; i+=2) {
    let str = ''
    const currentRow = (i + 1) / 2

    for(let j = 1; j <= row + currentRow - 1; j++) {
        if(j <= row - currentRow || j > row - currentRow + 1 && j < row + currentRow - 1 && i !== 2*row - 1) {
            str += ' '
        } else  {
            str += '*'
        }
    }

    console.log(str);
}
```

- ✨ Combines conditionals and symmetrical logic in loops.

---

### 7. Print Alternating Binary Triangle

- **Input :** <code>Rows = 5</code>

- **Output :**

```js
1
0 1
1 0 1
0 1 0 1
1 0 1 0 1

const row = 5

for(let i = 1; i <=row; i++) {
    let str = ''

    for(let j = 1; j <= i; j++) {
        str = str + (i % 2 === 1 ? j % 2 : (j + 1) % 2) 
    }
    console.log(str);
}
```

- ✨ Combines parity logic with nested loops.

---
