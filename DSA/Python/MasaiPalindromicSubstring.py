# Masai Palindromic Substring


def solve(s):
  def checker(left, right):
    while left >= 0 and right < len(s) and s[left] == s[right]:
      left -= 1
      right += 1
    return right - left - 1  

  maxlength = 0
  for i in range(len(s)):
    len1 = checker(i, i)
    len2 = checker(i, i + 1)
    maxlength = max(maxlength, len1, len2)
  print(maxlength)
s = input()
solve(s)