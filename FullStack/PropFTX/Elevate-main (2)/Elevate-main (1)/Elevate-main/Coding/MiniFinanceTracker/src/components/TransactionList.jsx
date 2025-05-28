const TransactionList = ({ transactions, onDelete }) => {
  if (transactions.length === 0) return <p>No transactions found.</p>;

  return (
    <ul>
      {transactions.map(({ id, type, amount, category }) => (
        <li key={id}>
          {type} - ${amount} [{category}]
          <button onClick={() => onDelete(id)}>❌</button>
        </li>
      ))}
    </ul>
  );
};

export default TransactionList;
