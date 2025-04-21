# Nearest smaller Element

def check(n,arr):
  st=[]
  res=[]
  for i in range(n):
    while st and st[-1]>=arr[i]:
      st.pop()
    if st:
      res.append(st[-1])
    else:
      res.append(-1)
    st.append(arr[i])
  print(" ".join(map(str,res)))


t=int(input())
for i in range(t):
  n=int(input())
  arr=list(map(int,input().split()))
  check(n,arr)