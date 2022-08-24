import { Text } from "@chakra-ui/react";
import { GameTeam } from "../../types/ResponseData";

type TeamProps = {
  team: GameTeam;
};

const Team = ({ team }: TeamProps) => {
  return (
    <div>
      <Text>{team.team.name}</Text>
    </div>
  );
};

export default Team;
