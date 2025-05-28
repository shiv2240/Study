import { useState } from "react";

const TransactionForm = ({ onAdd }) => {
  const [type, setType] = useState("Income");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (+amount <= 0) {
      alert("Amount must be greater than 0");
      return;
    }

    onAdd({ type, amount: +amount, category });
    setAmount("");
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="Income">Income</option>
        <option value="Expense">Expense</option>
      </select>

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />

      <button type="submit">Add</button>
    </form>
  );
};

export default TransactionForm;
