// Sort users by the age property in ascending order.

function check(users) {
  const res = users.sort((a, b) => a.age - b.age);
  console.log(res);
}

const users = [
  { name: "Alice", age: 25, email: "alice@example.com" },
  { name: "Bob", age: 17, email: "bob@example.com" },
  { name: "Carol", age: 30, email: "carol@example.com" },
  { name: "Dave", age: 22, email: "dave@example.com" },
  { name: "Eve", age: 19, email: "eve@example.com" },
];
check(users);
