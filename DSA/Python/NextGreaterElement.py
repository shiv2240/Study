# Next Greater Element

def check(n,arr):
  st=[]
  res=[]
  for i in reversed(arr):
    while st and st[-1]<=i:
      st.pop()
    if not st:
      res.append(-1)
    else:
      res.append(st[-1])
    st.append(i)
  print(*reversed(res))
t = int(input())
for i in range(t):
  n = int(input())
  arr = list(map(int, input().split()))
  check(n,arr)
  