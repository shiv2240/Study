# Count odd Subarrays

t = int(input())
for _ in range(t):
  n = int(input())
  arr = list(map(int,input().split()))
  
  count = 0
  for i in range(n):
    res = 1
    for j in range(i,n):
      res *= arr[j]
      if res % 2 == 0:
          break  
      else:
          count += 1

  print(count)