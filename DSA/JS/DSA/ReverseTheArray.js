// Reverse The Array

function reverseArray(n,arr){
    let res = ""
    for (let i=n-1; i>=0; i--){
      res+=arr[i] + " "
    }
    console.log(res)
  }