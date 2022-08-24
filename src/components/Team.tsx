import { Stack, Image, Text, Box, Heading, VStack } from "@chakra-ui/react";
import { GameTeam } from "../../types/ResponseData";

type TeamProps = {
  teamData: GameTeam;
};

const Team = ({ teamData }: TeamProps) => {
  const school = teamData.team;

  return (
    <div>
      <Stack direction="row" spacing={4}>
        {school.image ? (
          <Image src={school.image} boxSize="32px"></Image>
        ) : (
          <Box boxSize="32px"></Box>
        )}
        <VStack spacing={0} align="start">
          <Heading size="sm">{school.name}</Heading>
          <Text>{school.mascot}</Text>
        </VStack>
      </Stack>
    </div>
  );
};

export default Team;
