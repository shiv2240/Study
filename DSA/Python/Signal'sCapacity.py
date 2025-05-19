# Signal's Capacity


def check(arr):
  n = len(arr)
  st = []
  res = []
  for i in range(n):
    while st and arr[st[-1]] <= arr[i]:
      st.pop()
    if not st:
      res.append(i + 1)
    else:
      res.append(i - st[-1])
    st.append(i)
  print(*res)
t = int(input())
for _ in range(t):
  n = int(input())
  arr = list(map(int, input().split()))
  check(arr)
