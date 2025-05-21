// Use reduce to calculate the sum of all elements in numbers.

function check(numbers) {
  const res = numbers.reduce((acc, res) => acc + res, 0);
  console.log(res);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
check(numbers);
