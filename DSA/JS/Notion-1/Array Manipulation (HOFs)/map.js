// Use map to square each number in numbers.


function check(numbers){
    const res = numbers.map(num=>num**2)
    console.log(res)
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
check(numbers)