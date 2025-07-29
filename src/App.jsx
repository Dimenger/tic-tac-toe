import { AppLayout } from "./AppLayout";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const repeatGame = () => {
    dispatch({ type: "RESET_GAME" });
  };

  return <AppLayout repeatGame={repeatGame} />;
}

export default App;
