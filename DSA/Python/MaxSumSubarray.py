def check(n,arr):
  max1=arr[0]
  sum1=arr[0]
  for i in range(1,n):
    sum1=max(arr[i],sum1+arr[i])
    max1=max(sum1,max1)
  print(max1)

t=int(input())
for i in range(t):
  n=int(input())
  arr=list(map(int,input().split()))
  check(n,arr)