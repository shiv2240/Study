// Maximum Deliveries


function check(n,k,arr){
  let curr = 0, max1 = 0
  for(let i=0; i<k; i++){
    curr+=arr[i]
  }
  max1=curr
  for(let i=k; i<n; i++){
    curr+=arr[i]-arr[i-k]
    max1= Math.max(max1,curr)
  }
  console.log(max1)
}

function runProgram(input) {
  input = input.split("\n")
  line=0
  let [n,k] = input[line++].split(" ").map(Number)
  let arr =  input[line++].split(" ").map(Number)
  check(n,k,arr)
}