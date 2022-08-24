import { Team as TeamType } from "../../types/ResponseData";
import Team from "./Team";

type TeamsContainerProps = {
  teams: TeamType[];
};

const TeamsContainer = ({ teams }: TeamsContainerProps) => {
  return (
    <div>
      {teams.map((teamData) => {
        return <Team key={teamData.id} team={teamData} />;
      })}
    </div>
  );
};

export default TeamsContainer;
