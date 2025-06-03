import { useEffect, useState } from "react";
import "./App.css";
import Cart from "./Components/Cart"; // 👈 Import the new component

function App() {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [showcart, setShowcart] = useState(false);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await res.json();
        setItems(data);
      } catch (err) {
        console.error("Failed to fetch data", err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      
      {showcart && <Cart cart={cart} />}
      <div>
        <h2>Simple Demo</h2>
        <button onClick={() => setShowcart(!showcart)}>
          Cart({cart.length})
        </button>
      </div>
      <div>
        <h3>Items</h3>
        <ul>
          {items.map((item) => (
            <li key={item.id} style={{
                listStyle: "none",
                border: "2px solid white",
                borderRadius: "5px",
                margin: "20px",
                padding: "25px",
              }}>
              <div>{item.title}</div>
              <p>Status: {item.completed ? "Completed" : "Pending"}</p>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
