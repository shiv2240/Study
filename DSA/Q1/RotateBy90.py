def solve(n, mat):
  res=[[0]*n for i in range(n)]
  for i in range(n):
    for j in range(n):
      res[j][n-1-i]=mat[i][j]
  for i in res:
    print(" ".join(map(str,i)))

# OR


def solve(n, mat):
  for i in range(n):
    for j in range(i+1,n):
      mat[i][j], mat[j][i] =mat[j][i], mat[i][j]
  for i in range(n):
    left = 0
    right = n - 1
    while left < right:
      mat[i][left], mat[i][right] = mat[i][right], mat[i][left]
      left += 1
      right -= 1
  for i in mat:
    print(" ".join(map(str,i)))