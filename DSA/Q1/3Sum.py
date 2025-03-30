def check(n,arr):
  arr.sort()
  res=set()
  for i in range(n):
    j=i+1
    k=n-1
    while j<k:
      s=arr[i]+arr[j]+arr[k]
      if s==0:
        res.add((arr[i],arr[j],arr[k]))
        j+=1
        k-=1
      elif s<0:
        j+=1
      else:
        k-=1
  fin=sorted(res)
  print(len(fin))
  for i in fin:
    print(" ".join(map(str,i)))
  
    
t=int(input())
for i in range(t):
  n=int(input())
  arr=list(map(int,input().split()))
  check(n,arr)