import React from "react";

function Button({ setCount, count }) {
  function handleIncrement(e) {
    e.preventDefault();
    setCount((currNum) => currNum + 1);
    console.log(count, 6);
  }
  return (
    <div>
      Current Count: {count}
      <br></br>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default Button;
