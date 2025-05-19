# Remove Adjacent Duplicates


def check(n,st):
  s=[]
  for i in st:
    if s and s[-1]==i:
      s.pop()
    else:
      s.append(i)
  print("".join(s))
t=int(input())
for i in range(t):
  n=int(input())
  st=input()
  check(n,st)