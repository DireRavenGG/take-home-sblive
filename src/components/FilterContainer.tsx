import { HStack, Select } from "@chakra-ui/react";
import { ChangeEvent } from "react";
import ContainerWrapper from "./utils/ContainerWrapper";
import {
  genderOptions,
  sportsOptions,
  stateOptions,
  statusOptions,
} from "./utils/options";

type FilterContainerProps = {
  changeQuery: (e: ChangeEvent<HTMLSelectElement>, id: string) => void;
};
const FilterContainer = ({ changeQuery }: FilterContainerProps) => {
  return (
    <ContainerWrapper size="900px">
      <HStack>
        <Select
          placeholder="Sport"
          onChange={(e) => {
            changeQuery(e, "sport_id");
          }}
        >
          {sportsOptions.map(({ value, text }) => (
            <option key={value} value={value}>
              {text}
            </option>
          ))}
        </Select>
        <Select
          placeholder="Gender"
          onChange={(e) => {
            changeQuery(e, "gender_id");
          }}
        >
          {genderOptions.map(({ value, text }) => (
            <option key={value} value={value}>
              {text}
            </option>
          ))}
        </Select>
        <Select
          placeholder="Status"
          onChange={(e) => {
            changeQuery(e, "status_id");
          }}
        >
          {statusOptions.map(({ value, text }) => (
            <option key={value} value={value}>
              {text}
            </option>
          ))}
        </Select>
        <Select
          placeholder="State"
          onChange={(e) => {
            changeQuery(e, "state");
          }}
        >
          {stateOptions.map((value) => (
            <option key={value + "1"} value={value}>
              {value}
            </option>
          ))}
        </Select>
      </HStack>
    </ContainerWrapper>
  );
};

export default FilterContainer;
