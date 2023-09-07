import { useReducer, useState } from "react";

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//%%%%%%%%%%%%%%% BIGNNER LEVEL useReducer %%%%%%%%%%%%%%%%%
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     case "reset":
//       return (state = 0);
//     default:
//       throw new Error();
//   }
//   //   if (action.type === "increment") return state + 1;
//   //   if (action.type === "decrement") return state - 1;
// };

// function UseReducer() {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   return (
//     <div>
//       <h1>useReducer Hook</h1>
//       <h1>{state}</h1>
//       <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
//       <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
//       <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
//     </div>
//   );
// }

// export default UseReducer;

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//%%%%%%%%%%%%%%% COMPLEX useReducer %%%%%%%%%%%%%%%%%
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

const initialState = [
  // { id: Date.now(), name: "Bala", email: "bala@gmail.com" },
];
// reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "delete":
      return state.filter((contact) => contact.id !== action.payload.id);
    default:
      throw new Error();
  }
};

// App ========================= Component
function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // ADD Contact function
  const addContact = (e) => {
    e.preventDefault();
    const contact = {
      id: Date.now(),
      name,
      email,
    };
    setName("");
    setEmail("");
    dispatch({ type: "add", payload: contact });
  };

  // Return ====================
  return (
    <div className="App">
      <h1>useReducer Hook</h1>
      <form onSubmit={addContact}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div>
          <button onClick={addContact}>Add Contact</button>
        </div>
      </form>

      {/* Add Contact */}
      <div>
        <ul>
          {state.map((contact) => (
            <li key={contact.id}>
              <h2>{contact.name}</h2>
              <h2>{contact.email}</h2>
              <button
                onClick={() =>
                  dispatch({ type: "delete", payload: { id: contact.id } })
                }
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UseReducer;
