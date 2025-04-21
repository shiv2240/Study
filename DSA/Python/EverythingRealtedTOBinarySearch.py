# Everything Related To Binary Srach

def binarysearchfirst(arr, key):
  low, high = 0, len(arr) - 1
  result = -1
  while low <= high:
    mid = low + (high - low) // 2
    if arr[mid] == key:
      result = mid
      high = mid - 1  
    elif arr[mid] < key:
      low = mid + 1
    else:
      high = mid - 1
  return result

def binarysearchlast(arr, key):
  low, high = 0, len(arr) - 1
  result = -1
  while low <= high:
    mid = low + (high - low) // 2
    if arr[mid] == key:
      result = mid
      low = mid + 1  
    elif arr[mid] < key:
      low = mid + 1
    else:
      high = mid - 1
  return result

def solve(arr, key):
  first = binarysearchfirst(arr, key)
  last = binarysearchlast(arr, key)
  if first == -1 or last == -1:  
    return "-1 -1 0"
  else:
    count = last - first + 1
    return f"{first} {last} {count}"

N = int(input())  
arr = list(map(int, input().split())) 
key = int(input())  
print(solve(arr, key))