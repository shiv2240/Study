// Longest Substring Without Repeating Characters

var lengthOfLongestSubstring = function(s) {
    let set = new Set();
    let i = 0;
    let res = 0;
    for (let j = 0; j < s.length; j++) {
        while (set.has(s[j])) {
            set.delete(s[i]);
            i++;
        }
        set.add(s[j]);
        res = Math.max(res, j - i + 1);
    }
    return res;
};

// OR 

var lengthOfLongestSubstring = function(s) {
    let i=0;
    let j=0;
    let set = new Set();
    let size=0;
    while(j<s.length){
        if(!set.has(s[j])){
            set.add(s[j])
            size=Math.max(size, set.size)
            j++
        }else{
            set.delete(s[i])
            i++
        }
    }
    return size;
};
