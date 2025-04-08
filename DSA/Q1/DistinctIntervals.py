# Distinct Intervals


def check(s):
  n=len(s)
  c=0
  for i in range(n):
    bag=set()
    for j in range(i,n):
      if s[j] in bag:
        break
      bag.add(s[j])
      c+=1
  print(c)

t=int(input())
for i in range(t):
  s=input().strip()
  check(s)