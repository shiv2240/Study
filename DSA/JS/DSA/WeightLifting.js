// Weight Lifting

function weightLifting(n,arr){
  let i=0, j=n-1
  let harryt=0, johnt=0, harryc=0, johnc=0
  while( i<=j){
    while ( harryc<=johnc && i<=j){
      harryc+=arr[i]
      i++
    }
    harryt+=harryc
    johnc=0
    while( johnc <= harryc && i<=j){
      johnc+=arr[j]
      j--
    }
    johnt+=johnc
    harryc=0
  }
  console.log(harryt, johnt)
}