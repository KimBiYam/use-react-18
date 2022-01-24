import { useState } from "react";

const WithoutStartTransition = () => {
  const [input, setInput] = useState("");
  const [array, setArray] = useState([...Array(5000)]);

  const handleChange = (event) => {
    setInput(event.target.value);
    setArray(array.map((_) => Math.random()));
  };

  return (
    <div style={{ flex: 1 }}>
      <h2>Without startTransition</h2>
      <input value={input} onChange={handleChange} />
      {array.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};

export default WithoutStartTransition;
