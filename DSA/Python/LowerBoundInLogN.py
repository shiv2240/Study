# Lower Bound In LogN



def lowerbound(arr, k):
  left, right = 0, len(arr)
  result = -1  

  while left < right:
    mid = (left + right) // 2
    if arr[mid] >= k:  
      right = mid 
    else:
      left = mid + 1  

  if left < len(arr) and arr[left] == k:
    return left
  return -1
n, k = map(int, input().split())
arr = list(map(int, input().split()))
print(lowerbound(arr, k))