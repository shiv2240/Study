var longestOnes = function (nums, k) {
  let i = 0;
  let z = 0;
  let res = 0;
  let n = nums.length;
  for (let j = 0; j < n; j++) {
    if (nums[j] === 0) {
      z++;
    }
    while (z > k) {
      if (nums[i] === 0) {
        z--;
      }
      i++;
    }
    res = Math.max(res, j - i + 1);
  }
  return res;
};
