import { useSelector } from "react-redux"; 

function Twelve() {
  const drilledState = useSelector((state) => state.drilled.value);

  return (
    <>
        <p>{drilledState}</p>
    </>
  );
}

export default Twelve;

