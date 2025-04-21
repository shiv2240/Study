# How Much Rain Water Is Trapped?

def check(arr):
  n=len(arr)
  if n <= 2:
    return 0
  i,j=0, n-1
  l_max,r_max=arr[i],arr[j]
  res=0
  while i<=j:
    if l_max<=r_max:
      if arr[i] >= l_max:
        l_max = arr[i]
      else:
        res += l_max - arr[i]
      i += 1
    else:
      if arr[j] >= r_max:
        r_max = arr[j]
      else:
        res += r_max - arr[j]
      j -= 1
  return res
  
t=int(input())
for i in range(t):
  n=int(input())
  arr=list(map(int, input().split()))
  print(check(arr))
