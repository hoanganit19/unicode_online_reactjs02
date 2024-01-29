import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    // setCount(count + 1);
    setCount((prev) => {
      return prev + 1;
    });
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  console.log("Render");
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default Counter;
/*
const [tenState, hamSetState] = useState(khoitao)
*/
