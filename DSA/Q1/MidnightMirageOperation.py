def solve(n,arr):
  max1=0
  di={}
  i=0
  for j in range(n):
    if arr[j] in di:
      di[arr[j]]+=1
    else:
      di[arr[j]]=1
    while len(di)>2:
      di[arr[i]]-=1
      if di[arr[i]]==0:
        di.pop(arr[i])
      i+=1
    max1=max(max1,j-i+1)
  print(max1)