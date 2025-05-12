// Valid Parenthesis


function check(n, str) {
  let bal = true
  let st = []
  for (let i = 0; i < n; i++) {
    let char = str[i]
    if (char == "(" || char == "{" || char == "[") {
      st.push(char)
    } else if (char == ")" || char == "}" || char == "]") {
      if (st.length == 0) {
        bal = false
        break
      }
      let top = st[st.length - 1]
      if ((char == "}" && top == "{") || 
          (char == "]" && top == "[") || 
          (char == ")" && top == "(")) {
        st.pop()
      } else {
        bal = false
        break
      }
    }
  }
  if (st.length > 0) {
    bal = false
  }
  return bal ? 1 : 0
}

function runProgram(input) {
  input = input.trim().split("\n")
  let t = +input[0]
  let line = 1
  for (let i=0; i<t;i++){
    let [n, str] = input[line].split(" ")
    line++
    console.log(check(n,str))
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
