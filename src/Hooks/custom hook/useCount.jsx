import { useState } from "react";

export default function useCount(init) {
  const [count, setCount] = useState(init);

  const increment = () => {
    return setCount(count + 1);
  };
  const decrement = () => {
    return setCount(count - 1);
  };

  const reset = () => {
    return setCount(0);
  };

  return [count, increment, decrement, reset];
}
