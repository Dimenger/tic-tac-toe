import { FieldLayout } from "./FieldLayout";
import { useSelector } from "../../reduxConnector.jsx";
import { store } from "../../store.jsx";

const WIN_PATTERNS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const FieldContainer = () => {
  // состояния для игрового поля
  const field = useSelector((state) => state.field);
  const setField = (newField) =>
    store.dispatch({ type: "SET_FIELD", payload: newField });

  // состояния для игрока
  const currentPlayer = useSelector((state) => state.currentPlayer);
  const setCurrentPlayer = (player) =>
    store.dispatch({ type: "SET_CURRENT_PLAYER", payload: player });

  // состояниe окончания игры
  const isGameEnded = useSelector((state) => state.isGameEnded);
  const setIsGameEnded = (value) =>
    store.dispatch({ type: "SET_IS_GAME_ENDED", payload: value });

  // состояниe для ничьей
  const setIsDraw = (value) =>
    store.dispatch({ type: "SET_IS_DRAW", payload: value });

  const handleCellClick = (index) => {
    if (!isGameEnded && !field[index]) {
      const newField = [...field]; // Копируем массив
      newField[index] = currentPlayer;

      setField(newField); // Обновляем игровое поле

      const win = checkWinCondition(newField); // Проверяем победу
      if (win) {
        setIsGameEnded(true); // Игра заканчивается, если есть победитель
      } else if (!newField.includes("")) {
        setIsDraw(true); // Если все клетки заполнены и нет победителя, это ничья
        setIsGameEnded(true);
      } else {
        setCurrentPlayer(currentPlayer === "X" ? "O" : "X"); // Переключаем игрока, если игра продолжается
      }
    }
  };

  const checkWinCondition = (newField) => {
    for (let i = 0; i < WIN_PATTERNS.length; i++) {
      const pattern = WIN_PATTERNS[i];
      const firstSymbol = newField[pattern[0]];
      if (
        firstSymbol !== "" &&
        pattern.every((index) => newField[index] === firstSymbol)
      ) {
        return true; // Нашли победителя
      }
    }
    return false; // Победы нет
  };

  return <FieldLayout field={field} handleCellClick={handleCellClick} />;
};
