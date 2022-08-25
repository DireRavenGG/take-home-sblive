import { ResponseData } from "../../types/ResponseData";

export const getGameData = async (link: string) => {
  const res = await fetch(link);
  const data: ResponseData = await res.json();
  return data;
};
