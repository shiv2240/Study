# Definition of Linked List Node

# class Node: 
# 	def __init__(self, data): 
# 		self.data = data 
# 		self.next = None

# Complete the function below

class Solution:
    def insertNodeAtTail(self,head,data):
      new=Node(data)
      if not head:
        return new
      curr=head
      while curr.next:
        curr=curr.next
      curr.next=new
      return head

