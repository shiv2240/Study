# Move Zeroes 

def check(n,arr):
  res=0
  for i in range(n):
    if arr[i]!=0:
      arr[res]=arr[i]
      res+=1
  for i in range(res,n):
    arr[i]=0
  print(*arr)

t=int(input())
for i in range(t):
  n=int(input())
  arr=list(map(int,input().split()))
  check(n,arr)