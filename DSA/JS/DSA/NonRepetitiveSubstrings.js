// Non Repetitive Substrings


function check(st,k){
  let n= st.length
  let count=0
  for (let i=0 ; i<n-k+1 ;i++){
    let res = new Set()
    let bal = true
    for (let j=i; j<i+k; j++){
      if (res.has(st[j])){
        bal = false
        break
      }
      res.add(st[j])
    }
    if (bal) {
      count++
    }
  }
  console.log(count)
}

function runProgram(input) {
  input = input.split("\n")
  let t= +input[0]
  let line =1
  for(let i=0; i<t; i++){
    let st = input[line++]
    let k = +input[line++]
    check(st,k)
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
