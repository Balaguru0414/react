import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductList from "../pages/ProductList";
import Product from "../pages/Product";
import NewProduct from "../pages/NewProduct";
import ProductLayout from "../layout/ProductLayout";

const ProductsRoutes = () => {
  return (
    <>
      {/* <ProductLayout /> */}
      <Routes>
        <Route element={<ProductLayout />}>
          <Route index element={<ProductList />} />
          <Route path=":id" element={<Product />} />
          <Route path="new" element={<NewProduct />} />
        </Route>
      </Routes>
    </>
  );
};

export default ProductsRoutes;
