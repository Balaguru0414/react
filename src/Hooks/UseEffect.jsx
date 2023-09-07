import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [resource, setResource] = useState("posts");
  console.log("before renderd");
  useEffect(() => {
    console.log("renderd");

    return () => console.log("i am from return");
  }, [resource]);

  return (
    <div>
      <button onClick={() => setResource("posts")}>Posts</button>
      <button onClick={() => setResource("users")}>Users</button>
      <button onClick={() => setResource("comments")}>Comments</button>
      <h1>{resource}</h1>
    </div>
  );
};

export default UseEffect;
