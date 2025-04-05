# Remove Duplicates From Sorted Array

def check(arr):
  c=1
  ind=1
  n=len(arr)
  if n==0:
    print("0")
    return
  for i in range(1,n):
    if arr[i]==arr[i-1]:
      c+=1
    else:
      c=1
    if c<=2:
      arr[ind]=arr[i]
      ind+=1
  arr=arr[:ind]
  print(" ".join(map(str, arr)))
  print(ind)
arr=list(map(int, input().split()))
check(arr)
