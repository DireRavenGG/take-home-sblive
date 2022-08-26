import { GridItem, Text, HStack, Image, VStack, Grid } from "@chakra-ui/react";
import { GameTeam } from "../../../types/ResponseData";
import placeholderLogo from "../../assets/placeholder_sblive.png";
type DisplayScoreboardProps = {
  teams: GameTeam[];
  message: string;
  secondaryMessage: string;
};

const EmptyScoreboard = ({
  teams,
  message,
  secondaryMessage,
}: DisplayScoreboardProps) => {
  const schoolOne = teams[0].team;
  const schoolTwo = teams[1].team;
  return (
    <VStack justifyContent="center" alignItems="center">
      <Grid width="100%" templateColumns="1fr 64px 1fr" alignItems="center">
        <GridItem justifySelf="end" w="100%">
          <HStack>
            <Text
              fontWeight="black"
              fontSize="xl"
              textAlign="center"
              flexGrow={1}
            >
              {schoolOne.name}
            </Text>
            <Image
              src={schoolOne.image}
              fallbackSrc={placeholderLogo}
              boxSize="64px"
            />
          </HStack>
        </GridItem>
        <GridItem justifySelf="center">
          <Text fontWeight="black">vs</Text>
        </GridItem>
        <GridItem>
          <HStack>
            <Image
              src={schoolTwo.image}
              fallbackSrc={placeholderLogo}
              boxSize="64px"
            />
            <Text
              fontWeight="black"
              fontSize="xl"
              textAlign="center"
              flexGrow={1}
            >
              {schoolTwo.name}
            </Text>
          </HStack>
        </GridItem>
      </Grid>
      <VStack justifyContent="center" spacing={0}>
        <Text fontWeight="bold" fontSize="3xl">
          {message}
        </Text>
        <Text>{secondaryMessage}</Text>
      </VStack>
    </VStack>
  );
};

export default EmptyScoreboard;
