/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let i=0
    let j=height.length-1
    let sum=0
    let lMax = height[0]
    let rMax = height[j]

    while(i<j){
        if (lMax <=rMax){
            sum+=lMax - height[i]
            i++
            lMax = Math.max(lMax, height[i])
        }else{
            sum+=rMax - height[j]
            j--
            rMax = Math.max(rMax, height[j])
        }
    }
    return sum
};