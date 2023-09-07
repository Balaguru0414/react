import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const About = () => {
  const [user, setuser] = useState("bala");

  if (!user) return <Navigate to="/" replace={true} />;
  return (
    <div className="about">
      <h1>About us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
        molestias illum est deserunt non, neque ex soluta necessitatibus
        laborum? Laudantium fugiat amet atque similique deserunt, animi hic ipsa
        iusto nostrum?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
        molestias illum est deserunt non, neque ex soluta necessitatibus
        laborum? Laudantium fugiat amet atque similique deserunt, animi hic ipsa
        iusto nostrum?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
        molestias illum est deserunt non, neque ex soluta necessitatibus
        laborum? Laudantium fugiat amet atque similique deserunt, animi hic ipsa
        iusto nostrum?
      </p>

      <button onClick={() => setuser(null)}>Logout</button>
    </div>
  );
};

export default About;
