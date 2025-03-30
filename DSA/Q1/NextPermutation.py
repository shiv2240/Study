def check(n,arr):
  i=n-2
  while i>=0 and arr[i]>=arr[i+1]:
    i-=1
  if i>=0:
    j=n-1
    while arr[j]<=arr[i]:
      j-=1
    arr[i],arr[j]=arr[j],arr[i]
  l,r=i+1,n-1
  while l<r:
    arr[l],arr[r]=arr[r],arr[l]
    l+=1
    r-=1
  print(*arr)

t=int(input())
for i in range(t):
  n=int(input())
  arr=list(map(int,input().split()))
  check(n,arr)