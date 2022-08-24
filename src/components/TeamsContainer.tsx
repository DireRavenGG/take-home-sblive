import { Divider, Stack, Text } from "@chakra-ui/react";
import { parseISO } from "date-fns";
import format from "date-fns-tz/format";
import { GameTeam, Match } from "../../types/ResponseData";
import Team from "./Team";

type TeamsContainerProps = {
  teams: GameTeam[];
  match: Match;
};

const TeamsContainer = ({ teams, match }: TeamsContainerProps) => {
  const time = format(parseISO(match.date), "hh:mm aaa z");

  console.log(parseISO(match.date));
  return (
    <div>
      <Stack direction="row">
        <div>
          {teams.map((teamData) => {
            return <Team key={teamData.id} teamData={teamData} />;
          })}
        </div>
        <Divider orientation="vertical" />
        <div>
          <Text>{time}</Text>
        </div>
      </Stack>
    </div>
  );
};

export default TeamsContainer;
