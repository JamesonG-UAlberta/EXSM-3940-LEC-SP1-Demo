import { useSelector } from "react-redux"; 

function Fourteen() {
  const drilledState = useSelector((state) => state.drilled.value);

  return (
    <>
        <p>Fourteen - {drilledState}</p>
    </>
  );
}

export default Fourteen;

