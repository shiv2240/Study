# Sequence Validation

def solve(N,arr1,arr2):
  st=[]
  j=0
  for i in range(N):
    st.append(arr1[i])
    while len(st)>0 and st[-1]==arr2[j]:
      st.pop()
      j+=1
  if len(st)==0:
    print("1")
  else:
    print("0")