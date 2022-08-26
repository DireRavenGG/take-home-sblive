import {
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

import { Match } from "../../types/ResponseData";
import Scoreboard from "./Scoreboard";
import TeamsContainer from "./TeamsContainer";
type GameProps = {
  game: Match;
};

const Game = ({ game }: GameProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <button style={{ width: "100%" }} onClick={onOpen}>
        <TeamsContainer teams={game.game_teams} match={game} />
      </button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <Scoreboard match={game} />
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Game;
