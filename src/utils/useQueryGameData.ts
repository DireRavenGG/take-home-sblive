import { useQuery } from "react-query";
import { getGameData } from "../api/getGameData";

const useQueryGameData = (link: string) => {
  const data = useQuery(["gameData", link], () => getGameData(link));
  return data;
};

export default useQueryGameData;
