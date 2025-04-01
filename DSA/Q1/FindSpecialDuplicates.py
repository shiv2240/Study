def solve(N, k, A):
  di={}
  for i in range(N):
    if A[i] in di and i-di[A[i]]<=k:
      print(di[A[i]],i)
      return
    di[A[i]]=i
  print(-1)