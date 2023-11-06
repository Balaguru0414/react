import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// create component
function App() {
  return <h1>Hello World</h1>;
}
// create with state component
function App() {
  const [state, setState] = useState("Hello World");
  const [style, setStyle] = useState();

  return (
    <div>
      <h1 style={style}>{state}</h1>
      <button
        onClick={() => {
          setState("Hello everyone");
          setStyle({
            background: "red",
            color: "yellow",
          });
        }}
      >
        Change
      </button>
    </div>
  );
}
/////////////////////////////////////////////////////////////////////////////////////////
const App = () => {
  const [state, setState] = useState(["html", "css", "js"]);
  const [style, setStyle] = useState(false);
  function handleChange() {
    const fruits = ["apple", "banana", "mango"];
    setState(fruits);
    setStyle(!style);
  }

  const dark = {
    background: "black",
    color: "white",
  };

  return (
    <div>
      <h1 style={style ? {} : dark}>React</h1>
      <List web={state} />
      <button onClick={handleChange}>change</button>
    </div>
  );
};

export default App;

function List(props) {
  const web = props.web;

  return (
    <ul>
      <li>{web[0]}</li>
      <li>{web[1]}</li>
      <li>{web[2]}</li>
    </ul>
  );
}
