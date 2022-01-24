import { useState, useTransition } from "react";

const WithStartTransition = () => {
  const [input, setInput] = useState("");
  const [array, setArray] = useState([...Array(5000)]);
  const [isPending, startTransition] = useTransition({ timeoutMs: 3000 });

  const handleChange = (event) => {
    setInput(event.target.value);

    startTransition(() => {
      setArray(array.map((_) => Math.random()));
    });
  };

  return (
    <div style={{ flex: 1 }}>
      <h2>With startTransition</h2>
      <input value={input} onChange={handleChange} />
      <div className={isPending ? "pending" : ""}>
        {array.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
};

export default WithStartTransition;
