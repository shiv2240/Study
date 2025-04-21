# Diversity

def  check(n,k,arr):
  arr.sort()
  max1=0
  for i in range(n):
    count=1
    for j in range(i+1,n):
      if arr[j]-arr[i]<=k:
        count+=1
      else:
        break
    max1=max(max1,count)
  print(max1)


t=int(input())
for i in range(t):
  n,k=map(int,input().split())
  arr=list(map(int,input().split()))
  check(n,k,arr)