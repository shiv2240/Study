// Subarrays Having Sum Less Than M


function check(n,m,arr){
  let i=0, res=0, count=0
  for (let j = 0; j < n; j++) {
    res+=arr[j]
    while(res>=m && i<=j){
      res-=arr[i]
      i++
    } 
    count+=(j-i+1)
  }
  console.log(count)
}

function runProgram(input) {
  input = input.split("\n")
  let t = +input[0]
  let line = 1
  for (let i=0; i<t; i++){
    let [n,m] = input[line++].trim().split(" ").map(Number)
    let arr = input[line++].trim().split(" ").map(Number)
    check(n,m,arr)
  }
}
if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
