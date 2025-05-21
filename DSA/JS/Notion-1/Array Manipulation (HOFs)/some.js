// Use some on numbers to check if there is any number divisible by 7.

function check(numbers){
    const res = numbers.some(nums=>nums%7===0)
    console.log(res)
}


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
check(numbers)