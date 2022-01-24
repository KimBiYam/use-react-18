import { Link } from "react-router-dom";

const Root = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Link to="/batching">Automatic Batching</Link>
      <Link to="/start-transition">startTransition</Link>
    </div>
  );
};

export default Root;
