def check(n,mat):
  res=[]
  for i in range(n):
    res.append(mat[i][i])
    res.append(mat[i][n-i-1])
  max1=max(res)
  count=res.count(max1)
  print(count)
t=int(input())
for i in range(t):
  n=int(input())
  mat=[list(map(int,input().split())) for i in range(n)]
  check(n,mat)