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


# OR 

# With Input 

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
    
while True:
  line = input().strip()
  if line == "0":
    break
  n = int(line)
  arr = list(map(int, input().strip().split()))
  solve(n, arr)