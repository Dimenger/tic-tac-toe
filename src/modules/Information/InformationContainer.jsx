import { useState, useEffect } from "react";
import { InformationLayout } from "./InformationLayout";

export function InformationContainer({ currentPlayer, isGameEnded, isDraw }) {
  const [message, setMessage] = useState("");

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
