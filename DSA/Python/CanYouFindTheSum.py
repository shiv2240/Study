# can you find the sum


def solve(n, arr):
  x_values = [-1] * n
  y_values = [-1] * n
  result = [0] * n
  for i in range(n):
    for j in range(i - 1, -1, -1):  
      if arr[j] > arr[i]:
        x_values[i] = j + 1  
        break
  for i in range(n):
    for j in range(i + 1, n):  
      if arr[j] > arr[i]:
        y_values[i] = j + 1  
        break
  for i in range(n):
    x = x_values[i] if x_values[i] != -1 else -1
    y = y_values[i] if y_values[i] != -1 else -1
    result[i] = (x if x != -1 else -1) + (y if y != -1 else -1)
  return result
n = int(input())
arr = list(map(int,input().split()))
output = solve(n, arr)
print(*output)



# OR


def find(N,A):
  result=[]
  for i in range(N):
    x=-1
    y=-1
    for j in range(i-1,-1,-1):
      if A[j]>A[i]:
        x=j+1
        break
    for j in range(i+1,N):
      if A[j]>A[i]:
        y=j+1 
        break
    result.append(x+y)
  print(" ".join(map(str,result)))
N=int(input())
A=list(map(int,input().split()))
find(N,A)