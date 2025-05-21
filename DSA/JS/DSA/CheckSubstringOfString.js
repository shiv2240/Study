// 3. **Check if string `a` is a substring of string `b`**
//     - **Sample Input:**
        
//         ```jsx
//         const a = "test";
//         const b = "This is a test string";
//         ```
        
//     - **Expected Output:** `true`


function check(a,b){
    const new1 = b.includes(a)
    console.log(new1)
}

const a = "test";
const b = "This is a test string";
check(a,b)