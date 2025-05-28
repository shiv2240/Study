import { useState } from "react";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import Calculation from "./components/Calculation";

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [filterType, setFilterType] = useState("All");

  const addTransaction = (transaction) => {
    setTransactions([...transactions, { ...transaction, id: Date.now() }]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  const filteredTransactions = transactions.filter((t) =>
    filterType === "All" ? true : t.type === filterType
  );

  return (
    <div>
      <h2>Mini Finance Tracker</h2>
      <TransactionForm onAdd={addTransaction} />

      <div>
        <button onClick={() => setFilterType("All")}>All</button>
        <button onClick={() => setFilterType("Income")}>Income</button>
        <button onClick={() => setFilterType("Expense")}>Expense</button>
      </div>

      <Calculation transactions={transactions} />

      <TransactionList
        transactions={filteredTransactions}
        onDelete={deleteTransaction}
      />
    </div>
  );
};

export default App;
