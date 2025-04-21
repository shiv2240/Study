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