import { useState, useEffect } from "react";
import { InformationLayout } from "./InformationLayout";
import { useSelector } from "../../reduxConnector.jsx";

export function InformationContainer() {
  const [message, setMessage] = useState("");

  const currentPlayer = useSelector((state) => state.currentPlayer);
  const isGameEnded = useSelector((state) => state.isGameEnded);
  const isDraw = useSelector((state) => state.isDraw);

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
