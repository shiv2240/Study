// Compete The Neighbour


function neighbour(n,arr){
    let count = 0
    for (let i=1; i<n-1; i++){
      if (arr[i] > arr[i-1] && arr[i] > arr[i+1]){
        count++
      }
    }
    return count
  }
  
  function runProgram(input) {
    let line = input.split("\n")
    let n = +line[0]
    let arr = line[1].trim().split(" ").map(Number)
    console.log(neighbour(n,arr))
  }