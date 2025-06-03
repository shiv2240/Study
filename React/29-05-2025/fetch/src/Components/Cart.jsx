function Cart({ cart }) {
  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>No items found</p>
      ) : (
        <ul>
          {cart.map((item, i) => (
            <li key={i} style={{
                listStyle: "none",
                border: "2px solid white",
                borderRadius: "5px",
                margin: "20px",
                padding: "25px",
              }}>{i+1} . {item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
