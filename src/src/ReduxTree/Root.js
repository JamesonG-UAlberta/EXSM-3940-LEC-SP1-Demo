import One from "./One";
import Two from "./Two";
import Three from "./Three";
import {useState, createContext} from "react";

export const DrilledValueContext = createContext(0);
function Root() {
  const [drilledValue, setDrilledValue] = useState(0);

  return (
    <>
      <DrilledValueContext.Provider value={{
        mutator: setDrilledValue,
        value: drilledValue
      }}>
          <One />
          <Two />
          <Three />
      </DrilledValueContext.Provider>
    </>
  );
}

export default Root;
