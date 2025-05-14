// Two Sorted Arrays


function check(n, arr1, arr2) {
  let i = 0, j = n - 1, count = 0
  while (i < n && j >= 0) {
    if (arr1[i] === arr2[j]) {
      count++
      i++
      j--
    } else if (arr1[i] < arr2[j]) {
      i++
    } else {
      j--
    }
  }
  console.log(count)
}
function runProgram(input) {
  input = input.split("\n")
  let t = +input[0]
  let line = 1
  for (let i = 0; i < t; i++) {
    let n = +input[line++]
    let arr1 = input[line++].trim().split(" ").map(Number)
    let arr2 = input[line++].trim().split(" ").map(Number)
    check(n, arr1, arr2)
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
