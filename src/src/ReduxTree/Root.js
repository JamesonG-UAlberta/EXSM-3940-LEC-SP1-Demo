import One from "./One";
import Two from "./Two";
import Three from "./Three";
import store from "../ReduxStore/store";
import { Provider } from "react-redux";

function Root() {
  return (
    <>
      <Provider store={store}>
          <One />
          <Two />
          <Three />
      </Provider>
    </>
  );
}

export default Root;
