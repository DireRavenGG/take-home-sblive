import { parseISO } from "date-fns";
import { format } from "date-fns-tz";

export const displayMessage = (status_id: number, date: string) => {
  const upcomingMatchDate = format(parseISO(date), "MM/dd h:mm aa z");
  if (status_id === 1) {
    return { message: "Upcoming", secondaryMessage: `${upcomingMatchDate}` };
  }
  return {
    message: "Scores Not Yet Available",
    secondaryMessage: "Check back soon!",
  };
};
