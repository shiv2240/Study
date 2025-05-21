// 5. **Find the frequency of each element in an array**
//     - **Sample Input:** `[1, 2, 2, 3, 3, 3]`
//     - **Expected Output:** `{ "1": 1, "2": 2, "3": 3 }`


function check(arr){
    let di = {}
    for(let i of arr){
        di[i] = (di[i] || 0) + 1
    }
    console.log(di)
}

let arr = [1, 2, 2, 3, 3, 3]
check(arr)