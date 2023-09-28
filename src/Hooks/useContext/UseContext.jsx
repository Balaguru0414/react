// import React, { useState } from "react";

// export default function UseContext() {
//   const [name, setName] = useState("Bala");
//   return (
//     <div>
//       <p>name : {name}</p>
//       <One setName={setName} />
//     </div>
//   );
// }

// const One = ({ setName }) => {
//   return (
//     <>
//       <p>From One</p>
//       <Two setName={setName} />
//     </>
//   );
// };

// const Two = ({ setName }) => {
//   return (
//     <>
//       <p>From Two</p>
//       <Three setName={setName} />
//     </>
//   );
// };

// const Three = ({ setName }) => {
//   return (
//     <>
//       <p>From Two</p>
//       <button onClick={() => setName("L.Balaguru")}>Change Name</button>
//     </>
//   );
// };

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// import React, { createContext, useContext, useState } from "react";

// const AppContext = createContext(null);

// export default function UseContext() {
//   const [name, setName] = useState("Bala");
//   return (
//     <AppContext.Provider value={setName}>
//       <div>
//         <p>name : {name}</p>
//         <One />
//       </div>
//     </AppContext.Provider>
//   );
// }

// const One = () => {
//   return (
//     <>
//       <p>From One</p>
//       <Two />
//     </>
//   );
// };

// const Two = () => {
//   return (
//     <>
//       <p>From Two</p>
//       <Three />
//     </>
//   );
// };

// const Three = () => {
//   const setName = useContext(AppContext);
//   return (
//     <>
//       <p>From Two</p>
//       <button onClick={() => setName("L.Balaguru")}>Change Name</button>
//     </>
//   );
// };

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

import React, { useState } from "react";
import One from "./One";
import { NameContext } from "./context";

export default function UseContext() {
  const [name, setName] = useState("Bala");
  return (
    <NameContext.Provider value={{ name, setName }}>
      <div>
        <p>name : {name}</p>
        <One />
      </div>
    </NameContext.Provider>
  );
}
