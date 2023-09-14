import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    console.log("from useeffect");
    return () => {
      console.log("from return useeffect");
      window.removeEventListener("resize", updateWidth);
    };
  });
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };
  return <h2>{width}</h2>;
  //
  //
  //
    const [resource, setResource] = useState("posts");
    const [item, setItem] = useState([]);
    console.log("before renderd");
    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/${resource}`)
        .then((response) => response.json())
        .then((json) => setItem(json));
      return () => console.log("i am from return");
    }, [resource]);
    return (
      <div>
        <button onClick={() => setResource("posts")}>Posts</button>
        <button onClick={() => setResource("users")}>Users</button>
        <button onClick={() => setResource("comments")}>Comments</button>
        <h1>{resource}</h1>
        {item.map((el) => (
          <p>{JSON.stringify(el)}</p>
        ))}
      </div>
    );
};

export default UseEffect;
