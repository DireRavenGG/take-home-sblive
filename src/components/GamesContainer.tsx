import { SimpleGrid } from "@chakra-ui/react";
import { Match } from "../../types/ResponseData";
import Game from "./Game";
import ContainerWrapper from "./utils/ContainerWrapper";

type GamesContainerProps = {
  games?: Match[];
};
const GamesContainer = ({ games }: GamesContainerProps) => {
  return (
    <div>
      <ContainerWrapper size="900px">
        <SimpleGrid columns={2}>
          {games
            ? games.map((game: Match) => {
                return <Game key={game.uuid} game={game} />;
              })
            : null}
        </SimpleGrid>
      </ContainerWrapper>
    </div>
  );
};

export default GamesContainer;
