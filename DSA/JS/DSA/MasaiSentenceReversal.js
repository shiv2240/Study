// Masai Sentence Reversal


function runProgram(input) {
    let line = input.split(" ")
    let res = ""
    for (let i=line.length-1; i>=0; i--){
      res+=line[i] + " "
    }
    console.log(res)
  }