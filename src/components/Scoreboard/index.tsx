import { Match } from "../../../types/ResponseData";
import ContainerWrapper from "../utils/ContainerWrapper";
import { displayMessage } from "../utils/displayMessage";
import DisplayScoreboard from "./DisplayScoreboard";
import EmptyScoreboard from "./EmptyScoreboard";

type ScoreboardProps = {
  match: Match;
};

const Scoreboard = ({ match }: ScoreboardProps) => {
  const teams = match.game_teams;
  const { message, secondaryMessage } = displayMessage(
    match.status_id,
    match.date
  );
  return (
    <ContainerWrapper size="md" p={8}>
      {match.status_id === 1 ? (
        <EmptyScoreboard
          teams={teams}
          message={message}
          secondaryMessage={secondaryMessage}
        />
      ) : (
        <DisplayScoreboard teams={teams} />
      )}
    </ContainerWrapper>
  );
};

export default Scoreboard;
