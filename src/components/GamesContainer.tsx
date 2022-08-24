import { SimpleGrid } from "@chakra-ui/react";
import { Match } from "../../types/ResponseData";
import Game from "./Game";

type GamesContainerProps = {
  games?: Match[];
};
const GamesContainer = ({ games }: GamesContainerProps) => {
  return (
    <div>
      <SimpleGrid columns={2}>
        {games
          ? games.map((game: Match) => {
              return <Game key={game.uuid} game={game} />;
            })
          : null}
      </SimpleGrid>
    </div>
  );
};

export default GamesContainer;
