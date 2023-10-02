import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
// import { StaticRouter } from "react-router-dom/server";

// Pages

import Home from "./pages/Home";
// import ProductList from "./pages/ProductList";
// import Product from "./pages/Product";
// import NewProduct from "./pages/NewProduct";
// import ProductLayout from "./layout/ProductLayout";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Error from "./pages/Error";
import ProductsRoutes from "./routes/ProductsRoutes";

const Router2 = () => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      {/* <Routes location="/products">
        <Route path="/products" element={<h1>Side Bar</h1>} />
      </Routes> */}
      <Link to="/" replace>
        Home
      </Link>
      &nbsp;&nbsp;
      <Link to="/products" reloadDocument>
        Products
      </Link>
      &nbsp;&nbsp;
      <Link to="/contact">Contact</Link>&nbsp;&nbsp;
      <Link to="/about" state="about">
        About
      </Link>
      <Routes>
        <Route path="/" element={<Home />} />

        {/*======== Third ======== */}
        <Route path="/products/*" element={<ProductsRoutes />} />

        {/*======== second ======== */}

        {/* <Route path="/products" element={<ProductLayout />}>
          <Route index element={<ProductList />} />
          <Route path=":id" element={<Product />} />
          <Route path="new" element={<NewProduct />} />
        </Route> */}

        {/*======== first ======== */}

        {/* <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/products/new" element={<NewProduct />} /> */}

        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default Router2;
