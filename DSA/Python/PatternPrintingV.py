# Pattern Prinitng V


def solve(N):
  for i in range(N,0,-1):
    for j in range(1,N+1,1):
      if j<i:
        print("*", end=" ")
      elif j==i:
        print("*",end="")
      else:
        print(" ",end=" ")
    print()
N = int(input())
solve(N)