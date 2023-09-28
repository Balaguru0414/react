import { useRef } from "react";

export default function Counter() {
  let ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    alert(ref.current);
  }

  return (
    <>
      <button onClick={handleClick}>Click me!</button>
    </>
  );
}


// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

import { useEffect } from "react";
import { useRef } from "react";

const UseRef = () => {
  const head = useRef();
  const select = useRef();
  const ganesh = { current: null };
  const colors = ["red", "blue", "gray", "green", "yellow", "pink", "purple"];
  useEffect(() => {
    console.log(head);
    console.log(head.current);
  }, [select, ganesh]);

  const change = () => {
    const random = Math.floor(Math.random() * colors.length);
    head.current.style.color = colors[random];

    select.current = colors[random];
    console.log(select);
    ganesh.current = colors[random];
    console.log("ganesh", ganesh);
  };
  return (
    <div>
      <h1 ref={head}>Hello World</h1>
      <button onClick={change}>Change Color</button>
    </div>
  );
};

export default UseRef;

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

import React, { useEffect, useRef, useState } from "react";

const UseRef = () => {
  const [name, setName] = useState("");
  const [counter, setCounter] = useState(0);
  const input = useRef();
  const prev = useRef();
  // console.log(input);
  // useEffect(() => {
  //   console.log(input);
  // });

  const handleClick = (e) => {
    e.preventDefault();

    setName("");
    input.current.focus();
    input.current.value = "Hello";
  };

  const randomNo = () => {
    const random = Math.ceil(Math.random() * 100);
    setCounter(random);
    prev.current = counter;
  };

  return (
    <>
      <form>
        <input
          ref={input}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleClick}>Submit</button>
      </form>
      <div>
        <h1>name : {name}</h1>
      </div>
      {/* Counter */}
      <div>
        <h1>random counter : {counter}</h1>
        <h2>Previous Counter : {prev.current}</h2>
        <button onClick={randomNo}>Generate</button>
      </div>
    </>
  );
};

export default UseRef;
