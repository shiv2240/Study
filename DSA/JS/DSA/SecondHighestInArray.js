// 2. **Find the second highest number in a given array**
//     - **Sample Input:** `[10, 5, 8, 20, 20]`
//     - **Expected Output:** `10`

function check(arr) {
  let new1 = [...new Set(arr)];
  new1.sort((a, b) => b - a);
  if (new1 < 2) {
    console.log("No Second");
  } else {
    console.log(new1[1]);
  }
}

// OR

function check(arr) {
  let f = -Infinity;
  let s = -Infinity;
  for (let i of arr) {
    if (i > f) {
      s = f;
      f = i;
    } else if (i > s && i < f) {
      s = i;
    }
  }
  if (s == -Infinity) {
    console.log("No Second");
  } else {
    console.log(s);
  }
}

let arr = [10, 5, 8, 20, 20];
check(arr);
