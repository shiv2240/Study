// Make Leaderboard


function makeLeaderBoard(N, studentArr) {
  let res = []
  for (let i = 0; i < N; i++) {
    let [name, marks] = studentArr[i].split(" ")
    let mark = parseInt(marks, 10);
    res.push({ name, mark });
  }
  res.sort((a, b) => {
    if (b.mark !== a.mark) return b.mark - a.mark
    return a.name.localeCompare(b.name);
  });
  let output = []
  let rank = 1
  output.push(`${rank} ${res[0].name}`)
  for (let i = 1; i < res.length; i++) {
    if (res[i].mark !== res[i - 1].mark) {
      rank = i + 1;
    }
    output.push(`${rank} ${res[i].name}`);
  }
  output.forEach(line => console.log(line));
}


// OR


function makeLeaderBoard(N, studentArr) {

  let students = studentArr.map(entry => {
    let [name, marks] = entry.split(" ");
    return { name, marks: Number(marks) };
  });

  students.sort((a, b) => {
    if (b.marks !== a.marks) return b.marks - a.marks;
    return a.name.localeCompare(b.name);
  });

  let rank = 1;
  for (let i = 0; i < N; i++) {

    if (i > 0 && students[i].marks !== students[i - 1].marks) {
      rank = i + 1;
    }
    console.log(`${rank} ${students[i].name}`);
  }
}
