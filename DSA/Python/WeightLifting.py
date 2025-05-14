# Weight Lifting

def check(N, weights):
  N=len(weights)
  l=0 
  r=N - 1 
  harryTW = 0 
  johnTW = 0 
  harryCW = 0 
  johnCW= 0 
  while l<=r:
    while harryCW<=johnCW and l<=r:
      harryCW+=weights[l] 
      l+=1 
    harryTW+=harryCW 
    johnCW=0 

    while johnCW<=harryCW and l<=r:
      johnCW+=weights[r] 
      r-=1 
    johnTW+=johnCW 
    harryCW=0 
  print(harryTW,johnTW)
  
t=int(input())
for i in range(t):
  N=int(input())
  weights=list(map(int,input().split()))
  check(N, weights)
