const winningCombinations = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

export const check = (input, turn) => {
  const gotIt = winningCombinations.find((wc) => {
    const hasAll = wc.every((x) => {
      return input[turn].includes(x);
    });

    if (hasAll) {
      return wc;
    }

    return false;
  });

  return gotIt ? turn : undefined
};
