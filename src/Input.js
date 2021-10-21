import React from "react";

const Input = ({ input, setInput, check, array }) => {
  return (
    <div>
      <select value={input} onChange={(e) => setInput(e.target.value)}>
        <option value=""></option>
        {array.map((res) => {
          return <option value={res.countryName}>{res.countryName}</option>;
        })}
      </select>
      <button onClick={check} style={{ border: "1px solid", margin: 10 }}>
        Check Weather..
      </button>
    </div>
  );
};

export default Input;
