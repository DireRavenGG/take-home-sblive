import { Button, Center, HStack, Select } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import ContainerWrapper from "./utils/ContainerWrapper";
import {
  genderOptions,
  sportsOptions,
  stateOptions,
  statusOptions,
} from "./utils/options";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import { CalendarIcon } from "@chakra-ui/icons";
import React from "react";
type FilterContainerProps = {
  changeQuery: (e: ChangeEvent<HTMLSelectElement> | string, id: string) => void;
};
const FilterContainer = ({ changeQuery }: FilterContainerProps) => {
  const [startDate, setStartDate] = useState(new Date());

  const CalendarButton = (props: any, ref: React.Ref<HTMLInputElement>) => (
    <Button {...props}>
      <CalendarIcon />
    </Button>
  );

  return (
    <ContainerWrapper size="900px">
      <HStack>
        <Center>
          <DatePicker
            selected={startDate}
            onChange={(date: Date) => {
              changeQuery(format(date, "yyyy-MM-dd"), "date");
              setStartDate(date);
              console.log(date);
            }}
            customInput={React.createElement(React.forwardRef(CalendarButton))}
          />
        </Center>
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
