import "./App.css";
import MarqueeCarousel from "./components/Carousel.jsx";
import Counter from "./components/Counter.jsx";
import LocationForm from "./components/LocationForm.jsx";
import Timer from "./components/Timer.jsx";
import AddClear from "./components/AddClear.jsx"
import AddC from "./components/AddC.jsx"
function App() {
  return (
    <>
      <Timer />;
      <LocationForm />
      <Counter />
      <MarqueeCarousel/>
      <AddClear/>
      <AddC/>
    </>
  );
}

export default App;
