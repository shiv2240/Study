// Maximum Occurring Element

function maximumOccuringElement(A, N) {
    let di = {}
    for (let i of A) {
      di[i] = (di[i] || 0) + 1
    }
    let max1 = 0
    let maxe = null
    for (let i in di) {
      if (di[i] > max1) {
        max1 = di[i]
        maxe = i
      }
    }
    console.log (Number(maxe)) 
  }
  