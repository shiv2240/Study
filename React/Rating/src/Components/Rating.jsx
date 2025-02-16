import { useState } from "react";
import "./Rating.css";

const Rating = ({ maxRating = 5, onRate }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="rating">
      {Array.from({ length: maxRating }, (_, index) => (
        <span
          key={index}
          className={index < (hover || rating) ? "star filled" : "star"}
          onClick={() => {
            setRating(index + 1);
            onRate(index + 1);
          }}
          onMouseEnter={() => setHover(index + 1)}
          onMouseLeave={() => setHover(0)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default Rating;
