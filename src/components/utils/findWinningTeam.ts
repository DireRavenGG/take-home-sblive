export const findWinningTeam = (teamOne: number, teamTwo: number) => {
  if (teamOne === teamTwo) {
    return {
      oneColor: "#000",
      oneWeight: "black",
      twoColor: "#000",
      twoWeight: "black",
    };
  } else if (teamOne > teamTwo) {
    return {
      oneColor: "#000",
      oneWeight: "black",
      twoColor: "#94949494",
      twoWeight: "semibold",
      winner: "one",
    };
  }

  return {
    oneColor: "#94949494",
    oneWeight: "semibold",
    twoColor: "#000",
    twoWeight: "black",
    winner: "two",
  };
};
