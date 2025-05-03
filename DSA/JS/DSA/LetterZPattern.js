// Letter Z Pattern


function runProgram(input) {
    let n = parseInt(input);
    for (let i =1; i<n+1; i++){
      let bag =""
      for(let j=1;j<n+1;j++){
        if (i == 1 || i == n || j == n - i + 1){
          bag+="*"
        }else{
          bag+=" "
        }
      }
      console.log(bag)
    }
  }