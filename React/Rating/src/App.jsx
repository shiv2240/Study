import Rating from "./Components/Rating";

const App = () => {
  const handleRate = (rating) => {
    console.log("Rated:", rating);
  };

  return (
    <div>
      <h1>Rate this product</h1>
      <Rating onRate={handleRate} />
    </div>
  );
};

export default App;
