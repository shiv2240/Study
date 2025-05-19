# Alan & Christopher

def check(st):
  s=[]
  for i in st:
    if i=="#":
      if s:
        s.pop()
    else:
      s.append(i)
  print("".join(s))

t=int(input())
for i in range(t):
  st=input().strip()
  check(st)