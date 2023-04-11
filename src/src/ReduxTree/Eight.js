import { useSelector, useDispatch } from "react-redux"; 
import { modify } from "../ReduxStore/Slices/drilledSlice";

function Eight() {
  const drilledState = useSelector((state) => state.drilled.value);
  const dispatch = useDispatch();

  return (
    <>
        <input type="text" value={drilledState} onChange={(event) => {dispatch(modify(event.target.value))}}></input>
    </>
  );
}

export default Eight;

