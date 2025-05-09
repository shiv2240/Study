// Specific Diagonals


function specificDiagonals(R, C, matrix, K) {
  let row = -1, col = -1;

  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (matrix[i][j] === K) {
        row = i;
        col = j;
        break;
      }
    }
    if (row !== -1) break;
  }

  let i = row, j = col;

  while (i > 0 && j > 0) {
    i--;
    j--;
  }
  const diag1 = [];
  while (i < R && j < C) {
    diag1.push(matrix[i][j]);
    i++;
    j++;
  }

  i = row;
  j = col;

  while (i > 0 && j < C - 1) {
    i--;
    j++;
  }
  const diag2 = [];
  while (i < R && j >= 0) {
    diag2.push(matrix[i][j]);
    i++;
    j--;
  }
  console.log(diag1.join(" "));
  console.log(diag2.join(" "));
}
