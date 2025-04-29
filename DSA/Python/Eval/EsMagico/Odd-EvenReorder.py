'''
Node {
	int data,
    Node* node
}
'''
'''
This function should return head of Odd Even Reorderd linked list
'''
#Return head of new linked list
def oddEvenList(head):
  if not head or not head.next:
    return head
  odd=head
  even=head.next
  even_h=even
  while even and even.next:
    odd.next = even.next
    odd=odd.next
    even.next=odd.next
    even=even.next
  odd.next=even_h
  return head
