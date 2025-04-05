# Delete Kth node from end


# Definition of Linked List Node

# class Node: 
# 	def __init__(self, data): 
# 		self.data = data 
# 		self.next = None

# Complete the function below
def deleteYAfterX(head, K):
  dummy=Node(0)
  dummy.next=head
  fast=slow=dummy
  for i in range(K):
    fast=fast.next
  while fast.next:
    fast=fast.next
    slow=slow.next
  slow.next=slow.next.next
  return dummy.next
