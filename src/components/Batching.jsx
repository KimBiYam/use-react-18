import { useState } from "react";
import { flushSync } from "react-dom";

const Batching = () => {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  const handleClick = () => {
    // React 18 이전에도 자동적으로 배치 적용
    setCount((prevCount) => prevCount + 1);
    setFlag((prevFlag) => !prevFlag);
  };

  const handleTimeoutClick = () => {
    // React 18 이후부터 배치 적용
    setTimeout(() => {
      setCount((prevCount) => prevCount + 1);
      setFlag((prevFlag) => !prevFlag);
    }, 1000);
  };

  const handlePromiseClick = () => {
    // React 18 이후부터 배치 적용
    new Promise((resolve) => resolve()).then(() => {
      setCount((prevCount) => prevCount + 1);
      setFlag((prevFlag) => !prevFlag);
    });
  };

  const handleFlushSyncClick = () => {
    // 만약 배치를 적용하고 싶지 않다면 ReactDOM의 flushSync 함수를 사용
    flushSync(() => setCount((prevCount) => prevCount + 1));
    flushSync(() => setFlag((prevFlag) => !prevFlag));
  };

  console.log("rerender!");

  return (
    <div>
      <h3>Automatic Batching</h3>
      <p>Count : {count}</p>
      <p>Flag : {flag.toString()}</p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "16px",
        }}
      >
        <button type="button" onClick={handleClick}>
          Increment
        </button>
        <button type="button" onClick={handleTimeoutClick}>
          Increment with Timeout
        </button>
        <button type="button" onClick={handlePromiseClick}>
          Increment with Promise
        </button>
        <button type="button" onClick={handleFlushSyncClick}>
          Increment with flushSync
        </button>
      </div>
    </div>
  );
};

export default Batching;
