def check(n, m, mat):
  t, b, l, r = 0, n-1, 0, m-1
  res = []
  while t <= b and l <= r:
    for i in range(t, b + 1):
      res.append(mat[i][l])
    l += 1
    if t <= b:
      for i in range(l, r + 1):
        res.append(mat[b][i])
      b -= 1
    if l <= r:
      for i in range(b, t - 1, -1):
        res.append(mat[i][r])
      r -= 1
    if t <= b:
      for i in range(r, l - 1, -1):
        res.append(mat[t][i])
      t += 1
  print(" ".join(map(str, res)))

t = int(input())
for _ in range(t):
  n, m = map(int, input().split())
  mat = [list(map(int, input().split())) for _ in range(n)]
  check(n, m, mat)
