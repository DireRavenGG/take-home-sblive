import { UsaStates } from "usa-states";

export const sportsOptions = [
  { value: "1", text: "Basketball" },
  { value: "2", text: "Football" },
  { value: "3", text: "Baseball" },
  { value: "4", text: "Softball" },
  { value: "5", text: "Lacrosse" },
  { value: "6", text: "Volleyball" },
  { value: "7", text: "Soccer" },
  { value: "8", text: "Field Hockey" },
  { value: "9", text: "Ice Hockey" },
  { value: "10", text: "Water Polo" },
  { value: "11", text: "Cross Country" },
  { value: "12", text: "Golf" },
  { value: "13", text: "Tennis" },
];

export const statusOptions = [
  { value: "1", text: "Upcoming" },
  { value: "2", text: "Live" },
  { value: "3", text: "Completed" },
];

export const genderOptions = [
  { value: "1", text: "Male" },
  { value: "2", text: "Female" },
  { value: "3", text: "Coed" },
];

const usStates = new UsaStates();
const abbreviatedStates = usStates.arrayOf("abbreviations");
export const stateOptions = abbreviatedStates.map((state) => ({
  value: state,
  text: state,
}));
