import "./transition.css";
import WithoutStartTransition from "./WithoutStartTransition";
import WithStartTransition from "./WithStartTransition";

const StartTransition = () => {
  return (
    <div style={{ display: "flex" }}>
      <WithoutStartTransition />
      <WithStartTransition />
    </div>
  );
};

export default StartTransition;
