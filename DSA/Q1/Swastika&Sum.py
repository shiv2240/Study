# Swastika & Sum


def solve(n, m, matrix):
  midr=(n-1)//2
  midc=(m-1)//2
  sum1=0
  sum2=0
  for i in range(0,midr+1):
    sum1+=matrix[i][0]
  for i in range(1,m-1):
    sum1+=matrix[midr][i]
  for i in range(midr,n):
    sum1+=matrix[i][m-1]
  for i in range(0,midc):
    sum2+=matrix[n-1][i]
  for i in range(n-1,0,-1):
    sum2+=matrix[i][midc]
  for i in range(midc,m):
    sum2+=matrix[0][i]
  print(abs(sum1-sum2))