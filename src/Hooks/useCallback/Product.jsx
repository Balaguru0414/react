import React from "react";

const Product = React.memo(({ name, addToCart }) => {
  console.log(`${name} is rendered`);
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={addToCart}>AddTo cart</button>
    </div>
  );
});

export default Product;
