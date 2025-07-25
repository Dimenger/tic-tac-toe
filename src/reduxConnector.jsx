import { useState, useEffect } from "react";
import { store } from "./store.jsx";

export function useSelector(selector) {
  const [selectedState, setSelectedState] = useState(() =>
    selector(store.getState())
  );

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      const newSelectedState = selector(store.getState());
      setSelectedState(newSelectedState);
    });
    return () => unsubscribe();
  }, [selector]);

  return selectedState;
}
