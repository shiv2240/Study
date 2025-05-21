    // Chain map and filter on numbers to first double the values and then pick numbers greater than 10.


    function check(numbers){
        const res = numbers.map(num=>num*2).filter(num=>num>10)
        console.log(res)
    }

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    check(numbers)