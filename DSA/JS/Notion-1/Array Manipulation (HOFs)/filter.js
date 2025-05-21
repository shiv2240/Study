// Use filter to return only even numbers from numbers.

function check(numbers) {
  const res = numbers.filter((num) => num % 2 == 0);
  console.log(res);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
check(numbers);
