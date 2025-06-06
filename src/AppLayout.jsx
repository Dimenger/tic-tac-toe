import { FieldContainer } from "../src/modules/Field/FieldContainer";
import { InformationContainer } from "../src/modules/Information/InformationContainer";
import styles from "./App.module.css";
import PropTypes from "prop-types";

export const AppLayout = ({
  currentPlayer,
  setCurrentPlayer,
  isGameEnded,
  setIsGameEnded,
  isDraw,
  setIsDraw,
  field,
  setField,
  repeatGame,
}) => {
  return (
    <>
      {/* Информация о ходе игры */}
      <InformationContainer
        currentPlayer={currentPlayer}
        isGameEnded={isGameEnded}
        isDraw={isDraw}
      />
      {/* Кнопка Начать заново */}
      <button
        type="button"
        className={styles.repeatButton}
        onClick={repeatGame}
      >
        {" "}
        Начать заново{" "}
      </button>

      {/* Игровое поле */}
      <FieldContainer
        field={field}
        setField={setField}
        currentPlayer={currentPlayer}
        setCurrentPlayer={setCurrentPlayer}
        isGameEnded={isGameEnded}
        setIsGameEnded={setIsGameEnded}
        setIsDraw={setIsDraw}
      />
    </>
  );
};

// Пропсы типизированы с помощью PropTypes
AppLayout.propTypes = {
  currentPlayer: PropTypes.string.isRequired,
  setCurrentPlayer: PropTypes.func.isRequired,
  isGameEnded: PropTypes.bool.isRequired,
  setIsGameEnded: PropTypes.func.isRequired,
  isDraw: PropTypes.bool.isRequired,
  setIsDraw: PropTypes.func.isRequired,
  field: PropTypes.arrayOf(PropTypes.string).isRequired,
  setField: PropTypes.func.isRequired,
  repeatGame: PropTypes.func.isRequired,
};
