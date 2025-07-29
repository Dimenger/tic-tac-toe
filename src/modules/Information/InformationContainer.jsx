import { useState, useEffect } from "react";
import { InformationLayout } from "./InformationLayout";
import { useSelector } from "react-redux";
import {
  currentPlayerSelector,
  isGameEndedSelector,
  isDrawSelector,
} from "../../selectors";

export function InformationContainer() {
  const [message, setMessage] = useState("");

  const currentPlayer = useSelector(currentPlayerSelector);
  const isGameEnded = useSelector(isGameEndedSelector);
  const isDraw = useSelector(isDrawSelector);

  useEffect(() => {
    let newMessage;

    if (isDraw) {
      newMessage = "Ничья!";
    } else if (isGameEnded) {
      newMessage = `Победил игрок: ${currentPlayer}`;
    } else {
      newMessage = `Сейчас ходит: ${currentPlayer}`;
    }
    setMessage(newMessage);
  }, [currentPlayer, isGameEnded, isDraw]);

  return <InformationLayout message={message} />;
}
