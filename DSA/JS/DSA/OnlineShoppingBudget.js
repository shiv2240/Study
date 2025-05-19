// Online Shopping Budget

function check(arr,m){
  let i=0
  let curr=0, max1=0
  for (let j=0; j<arr.length;j++){
    curr+=arr[j]
    while(curr>m){
      curr-=arr[i]
      i++
    }
    max1=Math.max(max1,j-i+1)
  }
  console.log(max1)
}

function runProgram(input) {
  input = input.split("\n")
  let line = 0
  let arr = input[line++].split(" ").map(Number)
  let m = +input[line++]
  check(arr,m)
}