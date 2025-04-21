'''
Node {
	int data,
    Node* next
}
'''
'''
This function should return new head of linkedlist.
'''
def insertNodeAtHead(head, data):
	new=Node(data)
	new.next=head
	return new
