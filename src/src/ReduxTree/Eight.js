import { useContext } from "react";
import { DrilledValueContext } from "./Root";

function Eight() {
  const drilledState = useContext(DrilledValueContext);

  return (
    <>
        <input type="text" value={drilledState.value} onChange={(event) => {drilledState.mutator(event.target.value)}}></input>
    </>
  );
}

export default Eight;

