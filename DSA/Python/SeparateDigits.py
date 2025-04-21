# Separate Digits

def check(n,num):
  res=0
  for i in num:
    res+=int(i)
  if res>=17:
    print("Yes")
  else:
    print("No")

n=int(input())
num=input()
check(n,num)