// Max Sum Subarray of size K

maximumSumSubarray(arr, k) {
        let i=0
        let j=0
        let curr=0
        let res=0
        while ( j<arr.length ){
            curr += arr[j]
            if( j - i + 1 < k ){
                j++
            } else if ( j - i + 1 === k){
                res = Math.max( curr, res )
                curr -= arr[i]
                i++
                j++
            }
        }
        return +res
    }
