# Square Matrix - Weird Traversal I


def check(n,mat):
  c1 = sum(mat[i][0] for i in range(n//2))
  c2 = sum(mat[n//2])
  c3 = sum(mat[i][n-1] for i in range(n//2+1,n))
  print(4*c1+ 2*c2+ 3*c3)
  

n=int(input())
mat=[list(map(int,input().split())) for i in range(n)]
check(n,mat)