import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [count, setcount] = useState(0);
  const [arr, setArr] = useState([1, 2, 3]);
  const showMax = () => {
    console.log("check Max value");
    return Math.max(...arr);
  };

  const value = useMemo(() => showMax(), [arr]);

  return (
    <div>
      <h1>Count : {count}</h1>
      <h1>Max : {value}</h1>
      <h1>{JSON.stringify(arr)}</h1>
      <button onClick={() => setcount(count + 1)}>Add Count</button>
      <button
        onClick={() => setArr([...arr, Math.floor(Math.random() * count)])}
      >
        Add El Arr
      </button>
    </div>
  );
};

export default UseMemo;
