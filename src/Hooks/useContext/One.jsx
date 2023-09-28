import React, { useContext } from "react";
import Two from "./Two";
import { NameContext } from "./context";

const One = () => {
  const { name } = useContext(NameContext);
  console.log(name);
  return (
    <div>
      <p>I am from One : {name}</p>
      <Two />
    </div>
  );
};

export default One;
