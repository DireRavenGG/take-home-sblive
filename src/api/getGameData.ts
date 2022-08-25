import { ResponseData } from "../../types/ResponseData";

type getGameDataProps = {
  date: string;
  state?: string;
  gender?: number;
  status?: number;
  sport?: number;
};

export const getGameData = async ({
  date,
  state,
  gender,
  status,
  sport,
}: getGameDataProps) => {
  const link = `/v2/games?date=${date}&priority_order=true`;
  const res = await fetch(link);
  const data: ResponseData = await res.json();
  return data;
};
