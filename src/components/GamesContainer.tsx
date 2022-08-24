import { Match } from "../../types/ResponseData";
import Game from "./Game";

type GamesContainerProps = {
  games?: Match[];
};
const GamesContainer = ({ games }: GamesContainerProps) => {
  return (
    <div>
      {games
        ? games.map((game: Match) => {
            return <Game key={game.uuid} game={game} />;
          })
        : null}
    </div>
  );
};

export default GamesContainer;
