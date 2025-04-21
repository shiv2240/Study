# Search in sorted and rotated array


def check(n,k,arr):
  i,j=0,n-1
  while i<=j:
    mid=i+(j-i)//2
    if arr[mid]==k:
      print(mid)
      return
    if arr[i]<=arr[mid]:
      if arr[i]<=k<arr[mid]:
        j=mid-1
      else:
        i=mid+1
    else:
      if arr[mid]<k<=arr[j]:
        i=mid+1
      else:
        j=mid-1
  print("-1")
  
n,k=map(int,input().split())
arr=list(map(int,input().split()))
check(n,k,arr)