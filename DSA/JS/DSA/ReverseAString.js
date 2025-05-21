// 4. **Reverse a given string without using built-in reverse methods**
//     - **Sample Input:** `"hello world"`
//     - **Expected Output:** `"dlrow olleh"`



function check(st){
    let new1 = ""
    for(let i=st.length-1;i>=0; i--){
        new1+=st[i]
    }
    console.log(new1)
}

const st = "hello world"
check(st)