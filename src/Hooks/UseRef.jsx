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
