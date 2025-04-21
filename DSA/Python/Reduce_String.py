# Reduce String

def check(s):
  st=[]
  for i in s:
    if st and st[-1]==i:
      st.pop()
    else:
      st.append(i)
  if not st:
    print("Empty String")
  else:
    print("".join(st))


s=input()
check(s)