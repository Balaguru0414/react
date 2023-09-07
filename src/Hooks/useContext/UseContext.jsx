import React, { useState } from "react";
import FComponent from "./FComponent";
import CComponent from "./CComponent";

const UseContext = () => {
  const [darkTheme, setDarkTheme] = useState(true);
  console.log(darkTheme);

  return (
    <div>
      <button onClick={() => setDarkTheme((x) => !x)}>Toggle Theme</button>
      <FComponent />
      <CComponent />
    </div>
  );
};

export default UseContext;
