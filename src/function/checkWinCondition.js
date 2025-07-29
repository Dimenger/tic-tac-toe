export const checkWinCondition = (newField) => {
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
