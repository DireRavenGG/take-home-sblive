import { Center, Heading, SimpleGrid } from "@chakra-ui/react";
import { Match } from "../../types/ResponseData";
import Game from "./Game";
import ContainerWrapper from "./utils/ContainerWrapper";

type GamesContainerProps = {
  games: Match[];
  nextPage: () => void;
  currPage: number;
  allPages?: number;
};
const GamesContainer = ({
  games,
  nextPage,
  currPage,
  allPages,
}: GamesContainerProps) => {
  const gamesPresent = !!games.length;
  let count = 1;

  return (
    <ContainerWrapper size="md">
      {gamesPresent ? (
        <SimpleGrid columns={{ sm: 1, md: 2 }} py={4} spacing={2}>
          {games.map((game: Match) => {
            let uniqueId = count;
            count++;
            if (count === games.length) {
              return (
                <Game
                  last={true}
                  key={`${game.uuid}-${uniqueId}`}
                  game={game}
                  nextPage={nextPage}
                  currPage={currPage}
                  allPages={allPages}
                />
              );
            }
            return (
              <Game
                key={`${game.uuid}-${uniqueId}`}
                nextPage={nextPage}
                currPage={currPage}
                game={game}
              />
            );
          })}
        </SimpleGrid>
      ) : (
        <Center p={16}>
          <Heading size="md">No Games Scheduled</Heading>
        </Center>
      )}
    </ContainerWrapper>
  );
};

export default GamesContainer;
