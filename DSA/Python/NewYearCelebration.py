# New Year Celebration 


def check(queries):
  queue = []
  stack = []
  for i in queries:
    if i[0] == '1':
      queue.append(int(i[1]))
    elif i[0] == '2':
      stack.append(int(i[1]))
    elif i[0] == '3':
      print(queue[0] if queue else -1)
    elif i[0] == '4':
      print(stack[-1] if stack else -1)
    elif i[0] == '5':
      if queue:
        stack.append(queue.pop(0))
      else:
        print(-1)

q = int(input())
queries = [input().split() for _ in range(q)]
check(queries)
