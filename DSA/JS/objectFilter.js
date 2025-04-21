const data = [
  { name: "one", price: 25, category: "electronics" },
  { name: "two", price: 21, category: "food" },
  { name: "three", price: 55, category: "amendments" },
  { name: "four", price: 21, category: "food" },
  { name: "five", price: 63, category: "electronics" },
];

function result(data) {
  const res = {};

  for (let i = 0; i < data.length; i++) {
    let item = data[i];
    let product = item.category;

    if (!res[product]) {
      res[product] = [];
    }

    res[product].push(item);
  }

  console.log(res);
}

result(data);
