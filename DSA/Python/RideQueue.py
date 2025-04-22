# Ride Queue

def ride(n,arr):
  rounds=1
  for i in range(1,n):
    if arr[i-1]>=arr[i]:
      rounds+=1
  print(rounds)
T=int(input())
for t in range(T):
  n=int(input())
  arr=list(map(int,input().split()))
  ride(n,arr)