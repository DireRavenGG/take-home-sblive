import { Center, Divider, Stack, Text, VStack } from "@chakra-ui/react";
import parseISO from "date-fns/parseISO";
import format from "date-fns-tz/format";
import { GameTeam, Match } from "../../types/ResponseData";
import Team from "./Team";

type TeamsContainerProps = {
  teams: GameTeam[];
  match: Match;
};

const TeamsContainer = ({ teams, match }: TeamsContainerProps) => {
  const startTime = format(parseISO(match.date), "hh:mm aaa z"); // hour:min am/pm timezone

  return (
    <div>
      <Stack direction="row" justify="space-between">
        <div>
          <VStack align="start">
            {teams.map((teamData) => {
              return <Team key={teamData.id} teamData={teamData} />;
            })}
          </VStack>
        </div>

        <Center>
          <Divider orientation="vertical" />

          <Text paddingLeft="8px">{startTime}</Text>
        </Center>
      </Stack>
    </div>
  );
};

export default TeamsContainer;
