import { useState } from "react";
import { AppLayout } from "./AppLayout";

const initialKey = Array(9).fill("");

function App() {
  const [currentPlayer, setCurrentPlayer] = useState("X"); // Кто ходит
  const [isGameEnded, setIsGameEnded] = useState(false); // Была ли завершена игра
  const [isDraw, setIsDraw] = useState(false); // Была ли ничья
  const [field, setField] = useState(initialKey); // массив клеток поля

  const repeatGame = () => {
    setCurrentPlayer("X");
    setIsGameEnded(false);
    setIsDraw(false);
    setField(initialKey);
  };

  return (
    <AppLayout
      currentPlayer={currentPlayer}
      setCurrentPlayer={setCurrentPlayer}
      isGameEnded={isGameEnded}
      setIsGameEnded={setIsGameEnded}
      isDraw={isDraw}
      setIsDraw={setIsDraw}
      field={field}
      setField={setField}
      repeatGame={repeatGame}
    />
  );
}

export default App;
