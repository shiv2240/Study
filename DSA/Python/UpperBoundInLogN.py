# Upper Bound In LogN


def upperbound(arr, k):
  left, right = 0, len(arr)
    
  while left < right:
    mid = (left + right) // 2
    if arr[mid] > k:
      right = mid  
    else:
      left = mid + 1  
    
  return left

n, k = map(int, input().split())
arr = list(map(int, input().split()))
print(upperbound(arr, k))