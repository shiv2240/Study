// Calculate the average age of all users.

function check(users) {
  const res = users.reduce((acc, num) => acc + num.age, 0);
  const avg = res / users.length;
  console.log(avg);
}

const users = [
  { name: "Alice", age: 25, email: "alice@example.com" },
  { name: "Bob", age: 17, email: "bob@example.com" },
  { name: "Carol", age: 30, email: "carol@example.com" },
  { name: "Dave", age: 22, email: "dave@example.com" },
  { name: "Eve", age: 19, email: "eve@example.com" },
];
check(users);
