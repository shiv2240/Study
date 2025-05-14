# Abandoned City

def check(n,k,arr):
  res=0
  mini = float('inf')
  i=0
  for j in range(n):
    res+=arr[j]
    while res>=k:
      mini= min(mini, j-i+1)
      res-=arr[i]
      i+=1
  if mini == float("inf"):
    print(-1)
  else:
    print(mini)
    


t=int(input())
for i in range(t):
  n,k=map(int,input().split())
  arr=list(map(int,input().split()))
  check(n,k,arr)