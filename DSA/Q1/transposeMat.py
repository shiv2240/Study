def check(n,m,arr):
  return [[arr[j][i] for j in range(len(arr))] for i in range(len(arr[0]))]

n,m=map(int,input().split())
arr=[list(map(int,input().split())) for i in range(n)]
res1=check(n,m,arr)
for row in res1:
  print(" ".join(map(str, row)))