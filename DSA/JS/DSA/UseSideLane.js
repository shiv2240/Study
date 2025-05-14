// Use Side Lane 


function solve(n, arr) {
  let st = []
  let curr = 1
  for (let i = 0; i < n; i++) {
    let tr = arr[i]
    while (st.length > 0 && st[st.length - 1] === curr) {
      st.pop()
      curr++
    }
    if (tr === curr) {
      curr++
    } else {
      st.push(tr)
    }
  }
  while (st.length > 0 && st[st.length - 1] === curr) {
    st.pop()
    curr++
  }
  if (st.length === 0) {
    console.log("yes")
  } else {
    console.log("no")
  }
}
