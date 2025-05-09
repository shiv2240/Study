// A Football Tournament

function footBallTournament(n, teamNamesArr) {
  const di = {}
  for(let i in teamNamesArr){
    let team = teamNamesArr[i]
    di[team]= (di[team]||0)+1
  }
  let win = ""
  let max1 = 0
  for (let i in di){
    if(di[i]>max1){
      max1= di[i]
      win=i
    }
  }
  console.log(win)
}
