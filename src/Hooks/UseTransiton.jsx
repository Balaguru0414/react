import React, { useState, useTransition } from "react";

const UseTransiton = () => {
  const [isPending, startTransition] = useTransition();

  const [item, setItem] = useState();
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setItem(e.target.value);

    startTransition(() => {
      const l = [];
      for (let i = 0; i < 20000; i++) {
        l.push(e.target.value);
      }
      setList(l);
    });
  };

  return (
    <div>
      <input type="text" value={item} onChange={handleChange} /> <br /> <br />
      {isPending ? (
        <h1>Loading...</h1>
      ) : (
        list.map((item, index) => {
          return <div key={index}>{item}</div>;
        })
      )}
    </div>
  );
};

export default UseTransiton;
