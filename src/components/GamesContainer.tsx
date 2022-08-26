import { Center, Heading, SimpleGrid } from "@chakra-ui/react";
import { Match } from "../../types/ResponseData";
import Game from "./Game";
import ContainerWrapper from "./utils/ContainerWrapper";

type GamesContainerProps = {
  games: Match[];
};
const GamesContainer = ({ games }: GamesContainerProps) => {
  return (
    <div>
      <ContainerWrapper size="md">
        {games.length > 0 ? (
          <SimpleGrid columns={{ sm: 1, md: 2 }} py={4} spacing={2}>
            {games.map((game: Match) => {
              return <Game key={game.uuid} game={game} />;
            })}
          </SimpleGrid>
        ) : (
          <Center p={16}>
            <Heading size="md">No Games Scheduled</Heading>
          </Center>
        )}
      </ContainerWrapper>
    </div>
  );
};

export default GamesContainer;
