import { Navigate } from "react-router-dom";

const Error = () => {
  return <Navigate to="/" />;
};

export default Error;

// ========================================================

// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Error = () => {
//   const navigate = useNavigate();
//   return (
//     <>
//       <h1>Somting went wrong!!!</h1>
//       <button onClick={() => navigate("/")}>Home Page</button>
//     </>
//   );
// };

// export default Error;
