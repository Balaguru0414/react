import { useContext } from "react";
import { NameContext } from "./context";

const Three = () => {
  const { setName } = useContext(NameContext);
  return (
    <div>
      <p>I am from Three</p>
      <button onClick={() => setName("L.Balaguru")}>Change Name</button>
    </div>
  );
};

export default Three;
