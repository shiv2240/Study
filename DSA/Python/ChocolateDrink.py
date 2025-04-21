# Chocolate Drink


def check(n,arr):
  max1=0
  i,j=0,n-1
  while i<j:
    h=min(arr[i],arr[j])
    w=j-i
    a=h*w
    max1=max(max1,a)
    if arr[i]<arr[j]:
      i+=1
    else:
      j-=1
  print(max1)


n=int(input())
arr=list(map(int,input().split()))
check(n,arr)