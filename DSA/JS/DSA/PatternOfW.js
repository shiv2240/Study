// Patter Of W


function patternW(N) {
    for (let i = 0; i < N; i++) {
      let line = ""
      for (let j = 0; j < i; j++) line += " "
      line += "\\"
      for (let j = 0; j < 2 * (N - i - 1); j++) line += " "
      line += "/"
      for (let j = 0; j < 2 * i; j++) line += " "
      line += "\\"
      for (let j = 0; j < 2 * (N - i - 1); j++) line += " "
      line += "/"
      console.log(line)
    }
  }
  