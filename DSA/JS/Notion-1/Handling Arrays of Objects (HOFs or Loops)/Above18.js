// Find all users who are above 18 years old.

function check(users) {
  let di = [];
  for (let i of users) {
    if (i.age > 18) {
      di.push(i);
    }
  }
  console.log(di);
}

const users = [
  { name: "Alice", age: 25, email: "alice@example.com" },
  { name: "Bob", age: 17, email: "bob@example.com" },
  { name: "Carol", age: 30, email: "carol@example.com" },
  { name: "Dave", age: 22, email: "dave@example.com" },
  { name: "Eve", age: 19, email: "eve@example.com" },
];
check(users);
