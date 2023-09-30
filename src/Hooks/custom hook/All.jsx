// %%%%%%%%%%%%%%%%%%%%%%%%%% Custom Hook %%%%%%%%%%%%%%%%%%%%%%%%%%

import useCount from "./useCount";

const UseCustom = () => {
  const [value, inc, dec, reset] = useCount(0);

  return (
    <div>
      <h1>count : {value}</h1>
      <button onClick={inc}>inc</button>
      <button onClick={dec}>Dec</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default UseCustom;

// ================ useCount ================

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

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

import useScreen from "./useScreen";

const UseCustom = () => {
  const [size, screen] = useScreen();

  return (
    <div>
      <h1>Use Coustom hook</h1>
      <h1>Screen Size : {size} </h1>
      <h1>Screen Size : {screen} </h1>
    </div>
  );
};

export default UseCustom;

// ================ useScreen ================

import { useEffect, useState } from "react";

export default function useScreen() {
  const [screen, setScreen] = useState();
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    screenSize();
    window.addEventListener("resize", screenSize);
    return () => {
      window.removeEventListener("resize");
    };
  }, []);

  const screenSize = () => {
    setSize(window.innerWidth);
    if (window.innerWidth > 1000) return setScreen("Large");
    if (window.innerWidth < 1000 && window.innerWidth > 500)
      return setScreen("Medium");
    if (window.innerWidth < 500) return setScreen("Small");
  };

  return [size, screen];
}
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
