// Group users by age group, under 21, above 25, in between.
// (can be dynamic as well, for example group users by city(where no of cities can be dynamic))

function check(users) {
  const res = users.reduce(
    (gr, user) => {
      if (user.age < 21) {
        gr["Under 21"].push(user);
      } else if (user.age >= 21 && user.age <= 25) {
        gr["21-25"].push(user);
      } else {
        gr["Above 25"].push(user);
      }
      return gr;
    },
    {
      "Under 21": [],
      "21-25": [],
      "Above 25": [],
    }
  );
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
