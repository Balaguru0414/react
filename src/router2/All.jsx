// %%%%%%%%%%%%%%%%%%%%%%%%%%%% ROUTER %%%%%%%%%%%%%%%%%%%%%%%%%%%%

// ================== Basic Routes, Links ==================

import { BrowserRouter,Link,Route,Routes } from "react-router-dom";
// import { StaticRouter } from "react-router-dom/server";

const Router2 = () => {
    return (
      <BrowserRouter>
        <Link to="/" replace>Home</Link>&nbsp;&nbsp;        
        <Link to="/products" reloadDocument>Products</Link>&nbsp;&nbsp;
        <Link to="/contact">Contact</Link>&nbsp;&nbsp;
        <Link to="/about" state="about">About</Link>

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<Product />} /> 

          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />  
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default Router2;

// ================== ProductList ==================

import { Link } from "react-router-dom";

const ProductList = () => {
    return (
      <>
        <h2>Products List Page</h2>
       
        <Link to="/products/1">Product 1</Link> &nbsp;&nbsp;
        <Link to="/products/2">Product 2</Link> 
      </>
    );
  };
  
export default ProductList;

// ================== Product ==================

import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  return <h2>Product Page {id}</h2>
};

export default Product;

// ================== Product (New) ==================

<Route path="/products/new" element={<NewProduct />} /> 
  
// add Link in Productlayout - give example in website
  
<Link to="/products/new">New Book</Link>

// ================== Error page ==================

<Route path="*" element={<Error />} /> 

// ================== Nested Route ==================

<Routes>
    <Route path="/products">    
        <Route path=":id" element={<Product />} /> 
        <Route path="new" element={<NewProduct />} /> 
    </Route>
</Routes>

// Then Lastly add ProductList  >>> index <<<
<Route index element={<ProductList />} />

// ================== Product Layout ==================

// Copy all the links inside productlist page and 
// put it to the ProductLayout

const ProductLayout = () => {
  return (
    <div>
      <h1>ProductLayout</h1>
      <NavLink to="/products/new">New Book</NavLink>&nbsp;&nbsp;      
      <NavLink to="/products/1">Product 1</NavLink> &nbsp;&nbsp;
      <NavLink to="/products/2">Product 2</NavLink>
    </div>
  );
};

export default ProductLayout;

// router
// add productLayout parent route

<Route path="/products" element={<ProductLayout />}>  
    <Route index element={<ProductList />} />
    <Route path=":id" element={<Product />} /> 
    <Route path="new" element={<NewProduct />} /> 
</Route>

// Once you used the == layout == and defenitely
// you can add the >>> OUTLET <<< tag from react-router-dom

// ================== Context ==================

// you want to pass some data  
// so you can add >>> Context <<< from Outlet {inside data you give}

// And you want get data so can use >>> useOutletContext <<< any -child route-

//  >>>> ProductLauout >>>>

const prod = {
one: "Redmi",
second: "iphone",
thrid: "Samsung",
};

<Outlet context={prod} />

//  >>>> Product >>>>

const { second, thrid } = useOutletContext();
<h2>Product Page {id} {id % 2 == 0 ? second : thrid}</h2>

//  >>>> NewProduct >>>>

const { one } = useOutletContext();
<h2>NewProduct {one}</h2> 

// ================== Extra Content ==================

<Routes location="/products">
  <Route path="/products" element={<h1>Side Bar</h1>} />
</Routes>

// ================== ProductRoutes ==================

// cut and paste -- child products route

const ProductsRoutes = () => {
    return (
      <>
        {/* <ProductLayout /> */}
        <Routes>
          {/* <Route element={<ProductLayout />}> */}
            <Route index element={<ProductList />} />
            <Route path=":id" element={<Product />} />
            <Route path="new" element={<NewProduct />} />
          {/* </Route> */}
        </Routes>
      </>
    );
  };
  
// Router App
<Route path="/products/*" element={<ProductsRoutes />} />

// ================== Link Properties ==================

<Link to="/" raplace >Home</Link> &nbsp;&nbsp;
<Link to="products" reloadDocument >Products</Link> 

// ================== NavLink ==================

// It's has a active class defaultly
// add ".active" class in css -- and import =router App=

<NavLink to="/products/new">New Book</NavLink>&nbsp;&nbsp;      
<NavLink to="/products/1">Product 1</NavLink> &nbsp;&nbsp;
<NavLink to="/products/2">Product 2</NavLink>

// ================== Navigate Component ==================
// any error in the ulr 
// we can set default home page

import { Navigate } from "react-router-dom";

const Error = () => {
  return <Navigate to="/" />;
};

export default Error;

// ================== useNavigate ==================

// button move other page we can use >>> useNavigate

const Error = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Somting went wrong!!!</h1>
      <button onClick={() => navigate("/")}>Home Page</button>
    </>
  );
};

export default Error;

// navigate(-1)
// navigate(-2)

// ================== useSearchParams ==================

// this is used for like search product

// >>>> ProductsLayout >>>>

const ProductLayout = () => {
  // const [number, setNumber] = useState(3);
  const [search, setSearch] = useSearchParams({ q: 3 });
  const number = search.get("q");

  return (
    <div>      
      <NavLink to={`/products/${number}`}>
        Product {number}
      </NavLink>
      {/* <Outlet /> */}
      <input
        type="number"
        value={number}
        // onChange={(e) => setNumber( e.target.value )}
        onChange={(e) => setSearch({ q: e.target.value })}
      />
    </div>
  );
};

export default ProductLayout;

// ================== state,useLoaction ==================

// useLoaction to get pathname and state

// >>>> router App >>>>

<Link to='/' state='I from home'></Link>
const location = useLocation();
console.log(location);

// ================== Version 6.4 -- createBrowserRouter, createRoutesFromElements, RouterProvider ==================

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

// Layout
import RootLayout from "./layout/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    // parent route
    <Route path="/" element={<RootLayout />}>
      {/* child route */}
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const RouterApp = () => {
  return <RouterProvider router={router} />;
};

export default RouterApp;
