 
 function check(data) {
    const di1 = {};
    for (let i of data) {
        const res = i.split("").sort().join("");
        if (!di1[res]) {
            di1[res] = [];
        }
        di1[res].push(i); // <-- fixed here
    }
    return Object.values(di1);
}

let data = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(check(data));