import { AppLayout } from "./AppLayout";
import { store } from "./store.jsx";

function App() {
  const repeatGame = () => {
    store.dispatch({ type: "RESET_GAME" });
  };

  return <AppLayout repeatGame={repeatGame} />;
}

export default App;
