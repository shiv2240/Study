def solve(n,heights):
    stack = []
    max_area = 0
  
    for i in range(n + 1): 
      if i < n :
        curr_height = heights[i]
      else:
        curr_height=0 

      while stack and heights[stack[-1]] > curr_height:
        h = heights[stack.pop()]
        if not stack:
          w = i
        else:
          w=i - stack[-1] - 1  
        max_area = max(max_area, h * w)

      stack.append(i)

    print( max_area )