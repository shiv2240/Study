# Square root of an Integer


def solve(n):
  s = 0
  e  = n
  while s <= e:
    mid = s + (e - s) // 2
    if mid * mid == n :
      return mid
    elif mid * mid > n :
      e = mid - 1
    else:
      ans = mid
      s = mid + 1
  return ans
t = int(input())
for _ in range(t):
  n = int(input())
  print(solve(n))