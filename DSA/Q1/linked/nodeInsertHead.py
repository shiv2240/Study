def insertNodeAtHead(head, data):
	new=Node(data)
	new.next=head
	return new