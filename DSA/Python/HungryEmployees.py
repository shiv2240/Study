# Hungry Employees


def check(n,emp,mea):
  res=0
  count=0
  while emp and mea:
    if emp[0] == mea[0]:
      emp.pop(0)
      mea.pop(0)
      count=0
    else:
      emp.append(emp.pop(0))
      count+=1
    if count==len(emp):
      break
  res=len(emp)
  print(res)


n=int(input())
emp=list(map(int,input().split()))
mea=list(map(int,input().split()))
check(n,emp,mea)