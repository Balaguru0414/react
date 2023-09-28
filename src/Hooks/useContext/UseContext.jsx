import React, { useState } from "react";

export default function UseContext() {
  const [name, setName] = useState("Bala");
  return (
    <div>
      <p>name : {name}</p>
      <One setName={setName} />
    </div>
  );
}

const One = ({ setName }) => {
  return (
    <>
      <p>From One</p>
      <Two setName={setName} />
    </>
  );
};

const Two = ({ setName }) => {
  return (
    <>
      <p>From Two</p>
      <Three setName={setName} />
    </>
  );
};

const Three = ({ setName }) => {
  return (
    <>
      <p>From Two</p>
      <button onClick={() => setName("L.Balaguru")}>Change Name</button>
    </>
  );
};

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

import React, { createContext, useContext, useState } from "react";

const AppContext = createContext(null);

export default function UseContext() {
  const [name, setName] = useState("Bala");
  return (
    <AppContext.Provider value={setName}>
      <div>
        <p>name : {name}</p>
        <One />
      </div>
    </AppContext.Provider>
  );
}

const One = () => {
  return (
    <>
      <p>From One</p>
      <Two />
    </>
  );
};

const Two = () => {
  return (
    <>
      <p>From Two</p>
      <Three />
    </>
  );
};

const Three = () => {
  const setName = useContext(AppContext);
  return (
    <>
      <p>From Two</p>
      <button onClick={() => setName("L.Balaguru")}>Change Name</button>
    </>
  );
};

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

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


import React, { createContext, useContext, useState } from "react";

const AppContext = createContext(null);
const ThemeContext = createContext(null);

export default function UseContext() {
  const [name, setName] = useState("Bala");
  const [theme, setTheme] = useState("light");

  return (
    <AppContext.Provider value={setName}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div>
          <p>name: {name}</p>
          <p>theme: {theme}</p>
          <One />
        </div>
      </ThemeContext.Provider>
    </AppContext.Provider>
  );
}

const Three = () => {
  const setName = useContext(AppContext);
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <>
      <p>From Three</p>
      <p>Current Theme: {theme}</p>
      <button onClick={() => setTheme("Dark")}>Change Name</button>
      <button onClick={() => setName("L.Balaguru")}>Change Name</button>
    </>
  );
};
