# Use Side Lane

def solve(n, arr):
  stack = []
  curr = 1
  for i in range(n):
    truck = arr[i]
    while stack and stack[-1] == curr:
      stack.pop()
      curr += 1
    if truck == curr:
      curr += 1
    else:
      stack.append(truck)
  while stack and stack[-1] == curr:
    stack.pop()
    curr += 1
  if not stack:
    print("yes")
  else:
    print("no")
