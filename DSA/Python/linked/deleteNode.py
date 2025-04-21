# Definition of Linked List Node

# class Node: 
# 	def __init__(self, data): 
# 		self.data = data 
# 		self.next = None

# Complete the function below

class Solution:
    def deleteNode(self,node):
      if node.next is None or node is None:
        return
      node.data= node.next.data
      node.next=node.next.next
