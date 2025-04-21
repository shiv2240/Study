# Binary Search - Iterative

def check(n,k,arr):
  i,j=0,n-1
  while i<=j:
    mid=(i+j)//2
    if arr[mid]==k:
      print(1)
      return
    elif arr[mid]<k:
      i=mid+1
    else:
      j=mid-1
  print(-1)

n,k=map(int,input().split())
arr=list(map(int,input().split()))
check(n,k,arr)