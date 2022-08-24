import { Text } from "@chakra-ui/react";
import { GameTeam } from "../../types/ResponseData";

type TeamProps = {
  teamData: GameTeam;
};

const Team = ({ teamData }: TeamProps) => {
  return (
    <div>
      <Text>{teamData.team.name}</Text>
    </div>
  );
};

export default Team;
