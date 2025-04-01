# How much rain water is trapped?

def solve(N,arr):
  l,r=0,N-1
  lMax,rMax=0,0
  res=0
  while l<=r:
    if arr[l]<=arr[r]:
      if arr[l]>=lMax:
        lMax=arr[l]
      else:
        res+=lMax-arr[l]
      l+=1
    else:
      if arr[r]>=rMax:
        rMax=arr[r]
      else:
        res+=rMax-arr[r]
      r-=1  
  print(res)