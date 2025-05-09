// Alan & Frequency

function alanFreq(N,str){
  let di={}
  for (let i in str){
    let ch = str[i]
    di[ch]=(di[ch]||0)+1
  }
  Object.keys(di).sort().forEach(key=>{
    console.log(`${key}-${di[key]}`)
  })
}