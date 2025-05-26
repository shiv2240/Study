// Reverse A Linked List 
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
}

// Complete the function below

function reverse(head) {
  let prev = null
  let curr = head
  while(curr!=null){
    let next1 = curr.next
    curr.next = prev
    prev = curr
    curr = next1
  }
  return prev
}

