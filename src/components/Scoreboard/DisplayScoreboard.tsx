import { GridItem, Text, Image, Grid } from "@chakra-ui/react";
import { GameTeam } from "../../../types/ResponseData";
import placeholderLogo from "../../assets/placeholder_sblive.png";
import { findWinningTeam } from "../utils/findWinningTeam";
type DisplayScoreboardProps = {
  teams: GameTeam[];
};

const DisplayScoreboard = ({ teams }: DisplayScoreboardProps) => {
  const scoreOne = teams[0].score;
  const scoreTwo = teams[1].score;
  const schoolOne = teams[0].team;
  const schoolTwo = teams[1].team;
  const { oneColor, oneWeight, twoColor, twoWeight, winner } = findWinningTeam(
    scoreOne,
    scoreTwo
  );
  return (
    <Grid
      width="100%"
      templateColumns="1fr repeat(3,64px) 1fr"
      alignItems="center"
      rowGap={4}
    >
      <GridItem width="100%" justifySelf="end">
        <Text fontWeight="black" fontSize="xl" textAlign="center" flexGrow={1}>
          {schoolOne.name}
        </Text>
      </GridItem>
      <Image
        src={schoolOne.image}
        fallbackSrc={placeholderLogo}
        boxSize="64px"
      />
      <GridItem placeSelf="center">
        <Text fontWeight="black" fontSize="xl">
          vs
        </Text>
      </GridItem>
      <Image
        src={schoolTwo.image}
        fallbackSrc={placeholderLogo}
        boxSize="64px"
      />

      <Text fontWeight="black" fontSize="xl" textAlign="center" flexGrow={1}>
        {schoolTwo.name}
      </Text>

      <GridItem justifySelf="center" colStart={2} colEnd={3}>
        <Text fontWeight={oneWeight} fontSize="4xl" color={oneColor}>
          {scoreOne}
        </Text>
      </GridItem>
      <GridItem justifySelf="center" alignSelf="flex-end">
        {winner ? (
          winner === "one" ? (
            <Text fontSize="3xl">⯇</Text>
          ) : (
            <Text fontSize="3xl">⯈</Text>
          )
        ) : (
          <Text fontSize="3xl" fontWeight="black">
            -
          </Text>
        )}
      </GridItem>
      <GridItem justifySelf="center" colStart={4} colEnd={5}>
        <Text fontWeight={twoWeight} fontSize="4xl" color={twoColor}>
          {scoreTwo}
        </Text>
      </GridItem>
    </Grid>
  );
};

export default DisplayScoreboard;
