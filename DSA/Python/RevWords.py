def check(n,s):
  st=s.split()
  rev=[]
  for i in st:
    reve=""
    for j in i:
      reve=j+reve
    rev.append(reve)
  print(" ".join(rev))

t=int(input())
for i in range(t):
  n=int(input())
  s=input()
  check(n,s)