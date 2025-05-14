// Palindrome List

const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var isPalindrome = function (head) {
    let res = []
    let curr = head
    while(curr!==null){
      res.push(curr.data)
      curr = curr.next
    }
    let i = 0
    let j = res.length-1
    while (i<j){
      if(res[i]!== res[j]){
        return false
      }
      i++
      j--
    }
  return true
};
