import { useState } from "react";
import { Match } from "../../types/ResponseData";
import Scoreboard from "./Scoreboard";
import TeamsContainer from "./TeamsContainer";
type GameProps = {
  game: Match;
};

const Game = ({ game }: GameProps) => {
  const [openScoreboard, setOpenScoreboard] = useState(false);

  const scoreboardHandler = () => {
    setOpenScoreboard((prevOpenScoreboard) => !prevOpenScoreboard);
  };

  return (
    <div>
      <button style={{ width: "100%" }} onClick={scoreboardHandler}>
        <TeamsContainer teams={game.game_teams} match={game} />
      </button>
      {openScoreboard ? <Scoreboard match={game} /> : null}
    </div>
  );
};

export default Game;
