import React, { useCallback, useState } from "react";
import Product from "./Product";

const UseCallback = () => {
  const [prod, setprod] = useState(["Product 1", "Product 2"]);
  const [count, setcount] = useState(0);
  const [cart, setcart] = useState(0);

  const addToCart = useCallback(() => {
    setcart(cart + 1);
  }, [cart]);
  return (
    <div>
      <div style={{ border: "1px solid black" }}>
        <h2>Count : {count}</h2>
        <button onClick={() => setcount(count + 1)}>count +</button>
      </div>
      <h3>Cart : {cart}</h3>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        {prod.map((p, i) => (
          <Product addToCart={addToCart} name={p} key={i} />
        ))}
      </div>
    </div>
  );
};

export default UseCallback;
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
