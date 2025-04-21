import React from "react";
import "./MarqueeCarousel.css";

const skills = [
  "React",
  "Node.js",
  "MongoDB",
  "Express",
  "JavaScript",
  "HTML",
  "CSS",
];

export default function MarqueeCarousel() {
  return (
    <div className="marquee-container">
      <div className="marquee-track">
        {skills.concat(skills).map((skill, index) => (
          <div className="marquee-item" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
