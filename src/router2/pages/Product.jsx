import React from "react";
import { useOutletContext, useParams } from "react-router-dom";

const Product = () => {
  const { second, thrid } = useOutletContext();
  // console.log(second, thrid);
  const { id } = useParams();
  return (
    <h2>
      Product Page {id} {id % 2 == 0 ? second : thrid}
      {/* Product Page {id} */}
    </h2>
  );
};

export default Product;
