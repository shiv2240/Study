// Equilibrium Element

function equilibriumElement(N, arr){
    const res = arr.reduce((a,b)=>a+b,0)
    let left = 0
    for(let i=1;i<N-2;i++){
      left += arr[i-1]
      let right = res - left - arr[i]
      if(left === right){
        console.log(i)
        return
      }
    }
  console.log("-1")
  return
}
