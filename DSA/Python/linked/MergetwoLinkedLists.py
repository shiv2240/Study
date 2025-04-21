# Merge two Linked Lists


'''
Node {
	int data,
    Node* node
}
'''
'''
This function should return head of merged linked list
'''
def mergeLists(A, B):
  curr=dummy=Node(0)
  while A and B:
    if A.data < B.data:
      curr.next=A
      A,curr=A.next,A
    else:
      curr.next=B
      B,curr=B.next,B
  if A or B:
    curr.next=A if A else B
  return dummy.next
  
