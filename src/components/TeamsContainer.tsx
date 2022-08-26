import { Box, Center, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import parseISO from "date-fns/parseISO";
import format from "date-fns-tz/format";
import { GameTeam, Match } from "../../types/ResponseData";
import Team from "./Team";
import { statusChecker } from "./utils/statusChecker";

type TeamsContainerProps = {
  teams: GameTeam[];
  match: Match;
};

const TeamsContainer = ({ teams, match }: TeamsContainerProps) => {
  const startTime = format(parseISO(match.date), "hh:mm aa z"); // hour:min am/pm timezone

  return (
    <Box maxW="100%" height="100%" borderWidth="1px" borderRadius="xl">
      <Stack direction="row" justify="space-between">
        <Box p="8px">
          <VStack align="start">
            {teams.map((teamData) => {
              return <Team key={teamData.id} teamData={teamData} />;
            })}
          </VStack>
        </Box>

        <Center bg="#edf2f7" p="8px" borderRadius="0 .7rem .7rem 0">
          <VStack>
            <Heading size="sm">{statusChecker(match.status_id)}</Heading>
            <Text paddingLeft="8px">{startTime}</Text>
          </VStack>
        </Center>
      </Stack>
    </Box>
  );
};

export default TeamsContainer;
