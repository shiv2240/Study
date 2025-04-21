# Wood Cutter


def check(n,m,arr):
  arr.sort()
  low,high=0,arr[-1]
  while low<=high:
    mid=(low+high)//2
    res=0
    for i in arr:
      if i>mid:
        res+=i-mid
    if res>=m:
      low=mid+1
    else:
      high=mid-1
  return high

n,m=map(int,input().split())
arr=list(map(int,input().split()))
print(check(n,m,arr))