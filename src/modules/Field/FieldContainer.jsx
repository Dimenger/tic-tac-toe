import { FieldLayout } from "./FieldLayout";
import { useDispatch, useSelector } from "react-redux";
import { checkWinCondition } from "../../function/checkWinCondition";
import {
  currentPlayerSelector,
  fieldSelector,
  isGameEndedSelector,
} from "../../selectors";

import {
  setFieldChange,
  currentPlayerChange,
  isDrawChange,
  isGameEndedChange,
} from "../../actions";

export const FieldContainer = () => {
  const field = useSelector(fieldSelector); // состояния для игрового поля
  const currentPlayer = useSelector(currentPlayerSelector); // состояния для игрока
  const isGameEnded = useSelector(isGameEndedSelector); // состояниe окончания игры

  const dispatch = useDispatch();

  const setField = (newField) => dispatch(setFieldChange(newField));
  const setCurrentPlayer = (player) => dispatch(currentPlayerChange(player));
  const setIsGameEnded = (value) => dispatch(isGameEndedChange(value));
  const setIsDraw = (value) => dispatch(isDrawChange(value)); // состояниe для ничьей

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

  return <FieldLayout field={field} handleCellClick={handleCellClick} />;
};
