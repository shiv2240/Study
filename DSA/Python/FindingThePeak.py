# Finding The Peak


def findpeak(arr):
  left, right = 0, len(arr) - 1
  while left <= right:
    mid = (left + right) // 2
    if (mid==0 or arr[mid]>arr[mid-1]) and (mid==len(arr)-1 or arr[mid]>arr[mid+1]):
      return mid
    if mid > 0 and arr[mid - 1] > arr[mid]:
      right = mid - 1
    else:
      left = mid + 1
  return -1 

T = int(input()) 
for _ in range(T):
  N = int(input())  
  arr = list(map(int, input().split()))  
  print(findpeak(arr))