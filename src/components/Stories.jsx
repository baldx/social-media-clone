import React, { useRef } from "react";
import DefaultPfp from "../assets/default.png";

const Stories = () => {
  const storiesRef = useRef(null);

  const scrollStories = (direction) => {
    const scrollAmount = 150; //scroll distance
    if (direction === "left") {
      storiesRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else if (direction === "right") {
      storiesRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="stories-container">
      {/*left scroll button*/}
      <button className="scroll-button left" onClick={() => scrollStories("left")}>
        ←
      </button>

      {/*stories*/}
      <div className="stories" ref={storiesRef}>
        {[...Array(20)].map((_, index) => (
          <div className="user-story" key={index}>
            <img src={DefaultPfp} alt="User profile" className="pfp-story" />
            <div>Sigmaboy {index + 1}</div>
          </div>
        ))}
      </div>

      {/*right scroll button*/}
      <button className="scroll-button right" onClick={() => scrollStories("right")}>
        →
      </button>
    </div>
  );
};

export default Stories;
