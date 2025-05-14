# Stone Age Game 1

def numberOfStones(box):
  n = len(box)
  i, j = 0, n - 1
  rs, ss, max1 = 0, 0, 0
  while i < j:
    if rs < ss:
      rs += box[i]
      i += 1
    elif rs > ss:
      ss += box[j]
      j -= 1
    else:
      max1 = max(max1, rs)
      rs += box[i]
      ss += box[j]
      i += 1
      j -= 1
  if rs == ss:
    max1 = max(max1, rs)
  if max1 > 0:
    return max1
  else:
    return 0