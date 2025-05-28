const Calculation = ({ transactions }) => {
  const income = transactions
    .filter((t) => t.type === "Income")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "Expense")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const balance = income - expense;

  return (
    <div>
      <h3>Analytics</h3>
      <p>Income: ${income}</p>
      <p>Expense: ${expense}</p>
      <p>Balance: ${balance}</p>
    </div>
  );
};

export default Calculation;
