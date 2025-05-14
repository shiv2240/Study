# Non Repetitive Substrings


def check(st,k):
  n=len(st)
  count=0
  for i in range(n-k+1):
    res= set()
    bal = True
    for j in range(i, i+k):
      if st[j] in res:
        bal = False
        break
      res.add(st[j])
    if bal:
      count+=1
  print(count)

t=int(input())
for i in range(t):
  st=input()
  k=int(input())
  check(st,k)