def check(n,arr):
  max1=max(arr)
  res=[]
  for i in arr:
    if i == max1:
      res.append(-1)
    else:
      res.append(i)
  print(*res)
t=int(input())
for i in range(t):
  n=int(input())
  arr=list(map(int,input().split()))
  check(n,arr)