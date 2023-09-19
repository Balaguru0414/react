import React, { useState, useTransition } from "react";

const UseTransition = () => {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [tarnsition, setTransition] = useTransition();

  const handleChange = (e) => {
    setText(e.target.value);

    setTransition(() => {
      const arr = [];
      for (let i = 0; i < 20000; i++) {
        arr.push(e.target.value);
      }
      setList(arr);
    });
  };
  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      {/* <h1>{text}</h1> */}
      {tarnsition ? <h1>Loading...</h1> : list.map((el) => <h1>{el}</h1>)}
    </div>
  );
};

export default UseTransition;
