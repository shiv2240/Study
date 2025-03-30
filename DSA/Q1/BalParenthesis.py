def check(s):
  st=[]
  bal=True
  for i in s:
    if (i=="{") or (i=="[") or (i=="("):
      st.append(i)
    elif (i=="}") or (i=="]") or (i==")"):
      if len(st)==0:
        bal=False
        break
      top=st[-1]
      if (i=="]" and top=="[") or (i=="}" and top=="{") or (i==")" and top=="("):
        st.pop()
      else:
        bal=False
        break
  if  bal and len(st)==0:
    print ("balanced")
  else:
    print ("not balanced")


n=int(input())
for i in range(n):
  s=input()
  check(s)