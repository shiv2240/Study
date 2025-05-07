# Subarrays Problem


n = int(input())
arr = list(map(int,input().split()))

prefixSum = 0
evencount = 1 
oddcount = 0
result = 0
for i in arr:
  prefixSum += i

  if prefixSum % 2 == 0:
    result += evencount
    evencount += 1
  else:
    result += oddcount
    oddcount += 1
print(result)