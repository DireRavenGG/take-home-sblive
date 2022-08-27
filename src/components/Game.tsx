import {
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import useObserver from "./utils/hooks/useObserver";
import { Match } from "../../types/ResponseData";
import Scoreboard from "./Scoreboard";
import TeamsContainer from "./TeamsContainer";
type GameProps = {
  game: Match;
  last?: boolean;
  nextPage: () => void;
  currPage: number;
  allPages?: number;
};

const Game = ({ game, last, nextPage, currPage, allPages }: GameProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const lastElement = useObserver({ allPages, currPage, nextPage });

  return (
    <div>
      {last ? (
        <button style={{ width: "100%" }} onClick={onOpen} ref={lastElement}>
          <TeamsContainer teams={game.game_teams} match={game} />
        </button>
      ) : (
        <button style={{ width: "100%" }} onClick={onOpen}>
          <TeamsContainer teams={game.game_teams} match={game} />
        </button>
      )}

      <Modal size="xl" isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <Scoreboard match={game} />
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Game;
