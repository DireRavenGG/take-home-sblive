import { GameTeam } from "../../types/ResponseData";
import Team from "./Team";

type TeamsContainerProps = {
  teams: GameTeam[];
};

const TeamsContainer = ({ teams }: TeamsContainerProps) => {
  return (
    <div>
      {teams.map((teamData) => {
        return <Team key={teamData.id} teamData={teamData} />;
      })}
    </div>
  );
};

export default TeamsContainer;
