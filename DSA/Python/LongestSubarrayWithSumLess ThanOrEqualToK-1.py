# Longest subarray with sum less than or equal to K-1


def check(n, k, arr):
  i = 0
  curr = 0
  max1 = 0
  for j in range(n):
    curr += arr[j]
    while curr > k:
      curr -= arr[i]
      i += 1
    max1 = max(max1, j - i + 1)
  print(max1)

t = int(input())
for i in range(t):
  n, k = map(int, input().split())
  arr = list(map(int, input().split()))
  check(n, k, arr)
