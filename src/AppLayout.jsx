import { FieldContainer } from "../src/modules/Field/FieldContainer";
import { InformationContainer } from "../src/modules/Information/InformationContainer";
import styles from "./App.module.css";

export const AppLayout = ({ repeatGame }) => {
  return (
    <>
      {/* Информация о ходе игры */}
      <InformationContainer />

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
      <FieldContainer />
    </>
  );
};
