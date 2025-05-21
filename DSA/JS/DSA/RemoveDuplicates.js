// 1. **Remove all duplicate elements from an array**
//     - **Sample Input:** `[1, 2, 2, 3, 4, 4, 5]`
// - **Expected Output:** `[1, 2, 3, 4, 5]`

function check(arr) {
  let set = new Set();
  let res = [];
  for (let i of arr) {
    if (!set.has(i)) {
      set.add(i);
      res.push(i);
    }
  }
  console.log(res);
}

let arr = [1, 2, 2, 3, 4, 4, 5];
check(arr);
