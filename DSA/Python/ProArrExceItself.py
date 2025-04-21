def solve(N,arr):
  res=[1]*N
  l=1
  r=1
  for i in range(N):
    res[i]*=l
    l*=arr[i]
  for i in range(N-1,-1,-1):
    res[i]*=r
    r*=arr[i]
  print(" ".join(map(str,res)))