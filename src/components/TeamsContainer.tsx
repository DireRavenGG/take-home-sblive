import { Box, Center, Divider, Stack, Text, VStack } from "@chakra-ui/react";
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
    <Box maxW="100%" height="100%" borderWidth="1px" borderRadius="md">
      <Stack direction="row" justify="space-between" p="8px">
        <Box>
          <VStack align="start">
            {teams.map((teamData) => {
              return <Team key={teamData.id} teamData={teamData} />;
            })}
          </VStack>
        </Box>

        <Center>
          <Divider orientation="vertical" />
          <Text paddingLeft="8px">{startTime}</Text>
        </Center>
      </Stack>
    </Box>
  );
};

export default TeamsContainer;
