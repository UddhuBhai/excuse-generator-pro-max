export function calculateScores(severity) {
  const believability = Math.max(
    20,
    100 - severity * 5 + Math.floor(Math.random() * 15)
  );

  const creativity = Math.min(
    100,
    45 + severity * 5 + Math.floor(Math.random() * 20)
  );

  const shamelessness = Math.min(
    100,
    50 + severity * 6 + Math.floor(Math.random() * 15)
  );

  const chanceOfGettingCaught = Math.min(
    100,
    25 + severity * 7 + Math.floor(Math.random() * 15)
  );

  return {
    believability,
    creativity,
    shamelessness,
    chanceOfGettingCaught,
  };
}