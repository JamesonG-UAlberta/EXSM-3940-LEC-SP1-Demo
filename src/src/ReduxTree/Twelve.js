import { useContext } from "react";
import { DrilledValueContext } from "./Root";

function Twelve(props) {
  const drilledState = useContext(DrilledValueContext);

  return (
    <>
        <p>{drilledState.value}</p>
    </>
  );
}

export default Twelve;

