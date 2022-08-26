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
import useWindowDimensions from "./utils/useWindowDimensions";
type FilterContainerProps = {
  changeQuery: (e: ChangeEvent<HTMLSelectElement> | string, id: string) => void;
};
const FilterContainer = ({ changeQuery }: FilterContainerProps) => {
  const [startDate, setStartDate] = useState(new Date());
  const { width, height } = useWindowDimensions();
  const CalendarButton = (props: any, ref: React.Ref<HTMLInputElement>) => (
    <Button {...props}>
      <CalendarIcon />
    </Button>
  );

  const selectData = [
    { id: "sport_id", func: sportsOptions },
    { id: "gender_id", func: genderOptions },
    { id: "status_id", func: statusOptions },
    { id: "state", func: stateOptions },
  ];

  return (
    <ContainerWrapper size="md" pt={8}>
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
        {selectData.map(({ id, func }) => (
          <Select
            placeholder="All"
            onChange={(e) => {
              changeQuery(e, id);
            }}
          >
            {func.map(({ value, text }) => (
              <option key={`${text}-${value}`} value={value}>
                {text}
              </option>
            ))}
          </Select>
        ))}
      </HStack>
    </ContainerWrapper>
  );
};

export default FilterContainer;
