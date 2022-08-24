import { Stack, Image, Box, Heading } from "@chakra-ui/react";
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
        <Heading size="sm">{school.name}</Heading>
      </Stack>
    </div>
  );
};

export default Team;
