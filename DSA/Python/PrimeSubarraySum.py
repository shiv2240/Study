# Prime Subarray Sum


def prime(n):
  
  if n < 2:
    return False
  if n == 2:
    return True
  if n % 2 == 0:
    return False
  i = 3
  while i * i <= n:
    if n % i == 0:
      return False
    i += 2
  return True

def solve(arr):
  n = len(arr)
  max1 = -1
  for i in range(n):
    sum1 = 0
    for j in range(i, n):
      sum1 += arr[j]