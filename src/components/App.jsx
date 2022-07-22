import React, { useState } from "react";

function App() {
  const [headingtext, setheadingtext] = useState("Hello");
  const [isMouseOver, setMouseOver] = useState(false);

  function clicked() {
    setheadingtext("Submitted");
  }
  function onmouseover() {
    setMouseOver(true);
  }
  function onmouseout() {
    setMouseOver(false);
  }
  return (
    <div className="container">
      <h1>{headingtext}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onClick={clicked}
        onMouseOver={onmouseover}
        onMouseOut={onmouseout}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
