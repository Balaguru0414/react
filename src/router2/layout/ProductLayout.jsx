import React, { useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useParams,
  useSearchParams,
} from "react-router-dom";

// css
import "../../../index.css";

const ProductLayout = () => {
  // const [number, setNumber] = useState(3);
  const [search, setSearch] = useSearchParams({ q: 3 });
  const { id } = useParams();
  const number = search.get("q");
  const prod = {
    one: "Redmi",
    second: "iphone",
    thrid: "Samsung",
  };
  return (
    <div>
      <h1>ProductLayout</h1>
      <NavLink to="/products/new" state={"hello"}>
        New Book
      </NavLink>{" "}
      &nbsp;&nbsp;
      <NavLink to="/products/1">Product 1</NavLink> &nbsp;&nbsp;
      <NavLink to="/products/2">Product 2</NavLink> &nbsp;&nbsp;
      <NavLink to={`/products/${number}`}>
        Product {number}
        {id}
      </NavLink>
      <Outlet context={prod} />
      {/* <Outlet /> */}
      <input
        type="number"
        value={number}
        // onChange={(e) => setNumber({ q: e.target.value })}
        onChange={(e) => setSearch({ q: e.target.value })}
      />
    </div>
  );
};

export default ProductLayout;
