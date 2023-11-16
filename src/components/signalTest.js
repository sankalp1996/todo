import React from "react";
import { signal } from "@preact/signals-react";

const SignalTest = () => {
  const count = signal(0);
  const handleCounter = (e) => {
    count.value = count.value + e;
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => handleCounter(1)}>+</button>
      <button onClick={() => handleCounter(-1)}>-</button>
    </div>
  );
};

export default SignalTest;
