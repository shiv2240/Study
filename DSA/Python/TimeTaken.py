# Time Taken


def check(n,k,arr):
  t=0
  for i in range(n):
    if i<=k:
      t+=min(arr[i],arr[k])
    else:
      t+=min(arr[i], arr[k]-1)
  print(t)
n,k=map(int,input().split())
k-=1
arr=list(map(int,input().split()))
check(n,k,arr)