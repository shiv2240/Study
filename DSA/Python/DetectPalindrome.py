# Detect Palindrome

def Detect(num):
  if num<0:
    print("No")
    return
  og=num
  rev=0
  while num>0:
    last=num%10
    rev=rev*10+last
    num=num//10
  if og == rev:
    print("Yes")
  else:
    print("No")