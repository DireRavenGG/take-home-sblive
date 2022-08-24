import { Match } from "../../types/ResponseData";
import TeamsContainer from "./TeamsContainer";
type GameProps = {
  game: Match;
};

const Game = ({ game }: GameProps) => {
  return (
    <div>
      <TeamsContainer teams={game.game_teams} />
    </div>
  );
};

export default Game;
