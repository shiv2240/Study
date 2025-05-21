// Create a new array containing only the name values of all users.

function check(users) {
  const res = users.map((nums) => nums.name);
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
