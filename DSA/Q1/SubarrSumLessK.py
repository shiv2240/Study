def check(n,k,arr):
  c,i,res=0,0,0
  for j in range(n):
    res+=arr[j]
    while res>=k and i<=j:
      res-=arr[i]
      i+=1
    c+=(j-i+1)
  print(c)

t=int(input())
for i in range(t):
  n,k=map(int,input().split())
  arr=list(map(int,input().split()))
  check(n,k,arr)