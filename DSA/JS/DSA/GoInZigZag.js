// Go In Zig-Zag


function goInZigZag(N, M, matrix){
  let res = []
  for(let i=0;i<N;i++){
    if(i%2==0){
      for(let j=M-1;j>=0;j--){
        res.push(matrix[i][j])
      }
    }else{
      for(let j=0; j<M;j++){
        res.push(matrix[i][j])
      }
    }
  }
  console.log(res.join(" "))
}
