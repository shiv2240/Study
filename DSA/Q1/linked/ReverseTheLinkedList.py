# Reverse The Linked List


def reverse(A):
  prev=None
  curr=A
  while curr:
    new=curr.next
    curr.next=prev
    prev=curr
    curr=new
  return prev