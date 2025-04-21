# Smaller Neighbour Element


def solve(n, arr):
  result = [-1] * n  
  stack = []  
  for i in range(n):
    while stack and arr[stack[-1]] >= arr[i]:
      stack.pop()
    if stack:
      result[i] = arr[stack[-1]]
    stack.append(i)

  return result
n = int(input())
arr = list(map(int, input().split()))
print(*solve(n,arr))