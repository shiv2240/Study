// Recursive Bubble Sort 



function check(n,arr){
  if (n===1){
    return
  }
  for (let i=0; i<n-1;i++){
    if (arr[i]>arr[i+1]){
      [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
    }
  }
  check(n-1,arr)
}
function runProgram(input) {
  input = input.split("\n")
  let n = +input[0]
  let arr = input[1].trim().split(" ").map(Number)
  check(n,arr)
  console.log(arr.join(" "))
}