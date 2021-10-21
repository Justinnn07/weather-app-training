import React from "react";

const Input = ({ input, setInput, check }) => {
  return (
    <div>
      <select value={input} onChange={(e) => setInput(e.target.value)}>
        <option value=""></option>
        <option value="United Kingdom">United Kingdom</option>
        <option value="India">India</option>
        <option value="Canada">Canada</option>
      </select>
      <button onClick={check}>Check Weather..</button>
    </div>
  );
};

export default Input;
