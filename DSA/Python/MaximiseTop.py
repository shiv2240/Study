# Maximise Top 

def check(n,k,arr):
  if k==0:
    if n>0:
      return arr[0]
    else:
      return -1
  if k>n:
    if n>0:
      return max(arr)
    else:
      return -1
  max1=-1
  for i in range(min(n,k)):
    max1=max(max1,arr[i])
  if k<n:
    max1=max(max1,arr[k])
  return max1

n,k=map(int,input().split())
arr=list(map(int,input().split()))
print(check(n,k,arr))