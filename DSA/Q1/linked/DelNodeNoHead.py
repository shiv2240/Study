class Solution:
    def deleteNode(self,node):
      if node.next is None or node is None:
        return
      node.data= node.next.data
      node.next=node.next.next