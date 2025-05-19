// Cool Array 

function check(n,k,arr){
  if(k>n) return 0
  let di = {}
  let i=0
  let res=0
  for (let j=0; j<n; j++){
    di[arr[j]] = (di[arr[j]]||0)+1
    if(j-i+1>k){
      di[arr[i]]--
      if(di[arr[i]]===0){
        delete di[arr[i]]
      }
      i++
    }
    if(j-i+1===k){
      if(Object.keys(di).length===k){
        res++
      }
    }
  }
  console.log(res)
}

function runProgram(input) {
  input = input.trim().split("\n")
  let t = +input[0]
  let line = 1
  for (let i=0; i<t;i++){
    let [n,k]= input[line++].split(" ").map(Number)
    let arr = input[line++].split(" ").map(Number)
    check(n,k,arr)
  }
}