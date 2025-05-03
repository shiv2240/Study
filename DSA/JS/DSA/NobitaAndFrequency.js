// Nobita And Frequency


function solve(N,str){
    let di={}
    for(let i of str){
      di[i] = (di[i]||0)+1
    }
    let maxnum = 0;
    let maxchar = "";
    for(let i in di){
      if (di[i]> maxnum){
        maxnum = di[i]
        maxchar = i
      }
    }
  console.log(maxchar)
}