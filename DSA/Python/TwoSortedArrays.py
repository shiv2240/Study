# Two Sorted Arrays


def check(n ,arr1,arr2):
  i,j=0,n-1
  count=0
  while (i<n and j>=0):
    if(arr1[i]==arr2[j]):
      count+=1
      i+=1
      j-=1
    elif(arr1[i]< arr2[j]):
      i+=1
    else:
      j-=1
  print(count)

t=int(input())
for i in range(t):
  n=int(input())
  arr1=list(map(int,input().split()))
  arr2=list(map(int,input().split()))
  check(n ,arr1,arr2)
