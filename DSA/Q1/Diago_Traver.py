# Matrix Diagnol Traversal :
# Difficulty Level : Easy

# Submissions : 30

# Asked In :

# Marks :10

#  : 1 |  : 0

# Given a 2D Matrix of integers, print all its element if you start traverse diagonally starting from (0,0)th
#  element.


# 1≤N,M≤104

# 1≤NxM≤104

# 1≤MatrixElement≤104

# INPUT
# The first line contains two integers N
#  M
#  - number of rows and columns of matrix respectively.

# The next N
#  lines contain M
#  integers each representing the Matrix.

# OUTPUT
# Print a single line listing all matrix elements that we visit in order as described in problem.

# EXAMPLE
# Sample 1 INPUT:
# 3 3
# 1 2 3
# 4 5 6
# 7 8 9
# Sample 1 OUTPUT:
# 1 2 4 7 5 3 6 8 9
# ExplanationRefer illustration attached in problem statement.






def diagonal_traversal(matrix, n, m):
  result = []
  for i in range(n + m - 1):
    if i % 2 == 0:
      row = min(i, n - 1)
      col = max(0, i - n + 1)
      while row >= 0 and col < m:
        result.append(matrix[row][col])
        row -= 1
        col += 1
    else:
      col = min(i, m - 1)
      row = max(0, i - m + 1)
      while col >= 0 and row < n:
        result.append(matrix[row][col])
        row += 1
        col -= 1
  print (*result)
    
n,m=map(int,input().split())
matrix=[list(map(int,input().split())) for i in range(n)]
diagonal_traversal(matrix, n, m)