import { LinkBox } from "@chakra-ui/react";
import { Match } from "../../types/ResponseData";
import TeamsContainer from "./TeamsContainer";
type GameProps = {
  game: Match;
};

const Game = ({ game }: GameProps) => {
  return (
    <LinkBox>
      <TeamsContainer teams={game.game_teams} match={game} />
    </LinkBox>
  );
};

export default Game;
