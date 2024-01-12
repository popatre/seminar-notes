import React from "react";
import Button from "./Button";

function Form({ setCount, input, setInput, count }) {
  function handleSubmit(e) {
    e.preventDefault();
    setCount(input);
  }

  function handleChange(e) {
    const num = e.target.value;
    setInput(num);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="number-input">
          What number do you want to start counting from?
        </label>
        <br></br>
        <input
          onChange={handleChange}
          id="number-input"
          aria-label="an input to enter a number for the counter"
          placeholder="0"
        ></input>
        <button>Set Number</button>

        <Button setCount={setCount} />
      </form>
    </div>
  );
}

export default Form;
