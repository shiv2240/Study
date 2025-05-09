// Spiral Traversal (Rectangula Matrix)

function spiralTraversal(N, M, arr) {
  let top = 0, bottom = N - 1;
  let left = 0, right = M - 1;
  const result = [];
  while (top <= bottom && left <= right) {
    for (let i = top; i <= bottom; i++) {
      result.push(arr[i][left]);
    }
    left++;

    for (let i = left; i <= right; i++) {
      result.push(arr[bottom][i]);
    }
    bottom--;
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result.push(arr[i][right]);
      }
      right--;
    }
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        result.push(arr[top][i]);
      }
      top++;
    }
  }
  console.log(result.join(" "));
}
