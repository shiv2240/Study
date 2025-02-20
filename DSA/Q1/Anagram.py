def solve(s1,s2):
  s1=s1.replace(" ","").lower()
  s2=s2.replace(" ","").lower()
  if len(s1)!=len(s2):
    print ("False")
    return
  ch1={}
  ch2={}
  for i in s1:
    if i in ch1:
      ch1[i]+=1
    else:
      ch1[i]=1
  for i in s2:
    if i in ch2:
      ch2[i]+=1
    else:
      ch2[i]=1
  if ch1==ch2:
    print ("True")
  else:
    print ("False")