# Unique Gifts 

def unique(arr):
  count={}
  queue=[]
  res=[]
  for i in arr:
    count[i]=count.get(i,0)+1
    queue.append(i)
    flag=False
    for j in queue:
      if count[j]==1:
        res.append(j)
        flag=True
        break
    if not flag:
      res.append('#')
  print("".join(res))

T=int(input())
for t in range(T):
  arr=input()
  unique(arr)