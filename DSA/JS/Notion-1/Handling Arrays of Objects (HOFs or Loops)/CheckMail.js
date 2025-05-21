// Check if there exists any user with the email "dave@example.com".

function check(users) {
  for (let i of users) {
    if (i.email === "dave@example.com") {
      return true;
    }
  }
  return false;
}

const users = [
  { name: "Alice", age: 25, email: "alice@example.com" },
  { name: "Bob", age: 17, email: "bob@example.com" },
  { name: "Carol", age: 30, email: "carol@example.com" },
  { name: "Dave", age: 22, email: "dave@example.com" },
  { name: "Eve", age: 19, email: "eve@example.com" },
];
console.log(check(users));
