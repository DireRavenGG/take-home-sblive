import { Stack, Image, Text, Box, Heading, VStack } from "@chakra-ui/react";
import { GameTeam } from "../../types/ResponseData";
import placeholderLogo from "../assets/placeholder_sblive.png";
type TeamProps = {
  teamData: GameTeam;
};

const Team = ({ teamData }: TeamProps) => {
  const school = teamData.team;
  return (
    <div>
      <Stack direction="row" spacing={4}>
        <Box alignSelf="center" justifySelf="center" width="32px">
          <Image
            src={school.image}
            fallbackSrc={placeholderLogo}
            boxSize="32px"
          />
        </Box>
        <VStack spacing={0} align="start">
          <Heading size="sm">{school.name}</Heading>
          <Box>
            <Text>{school.mascot || "TBA"}</Text>
          </Box>
        </VStack>
      </Stack>
      {/* Should redirect to a scoreboard page/ maybe open modal that shows more information not sure yet */}
    </div>
  );
};

export default Team;
