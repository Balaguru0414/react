// import useCount from "./useCount";

// const UseCustom = () => {
//   const [value, inc, dec, reset] = useCount(0);

//   return (
//     <div>
//       <h1>count : {value}</h1>
//       <button onClick={inc}>inc</button>
//       <button onClick={dec}>Dec</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   );
// };

// export default UseCustom;

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
import useScreen from "./useScreen";

const UseCustom = () => {
  const [size, screen] = useScreen();

  return (
    <div>
      <h1>Use Coustom hook</h1>
      <h1>Screen Size : {size} </h1>
      <h1>Screen Size : {screen} </h1>
    </div>
  );
};

export default UseCustom;
