import {
  Button,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Select,
  useDisclosure,
  VStack,
  Text,
  Box,
  HStack,
} from "@chakra-ui/react";
import { ChangeEvent, forwardRef, useState } from "react";
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

type FilterContainerProps = {
  changeQuery: (e: ChangeEvent<HTMLSelectElement> | string, id: string) => void;
};
const FilterContainer = ({ changeQuery }: FilterContainerProps) => {
  const [startDate, setStartDate] = useState(new Date());
  const [currDate, setCurrDate] = useState(format(startDate, "MM-dd-yyyy"));
  const { onOpen, onClose, isOpen: isDrawerOpen } = useDisclosure();
  const CalendarButton = forwardRef(({ onClick }: any, ref: any) => (
    <Button onClick={onClick} ref={ref}>
      <CalendarIcon />
    </Button>
  ));

  const selectData = [
    { placeholder: "Sports", id: "sport_id", func: sportsOptions },
    { placeholder: "Gender", id: "gender_id", func: genderOptions },
    { placeholder: "Status", id: "status_id", func: statusOptions },
    { placeholder: "State", id: "state", func: stateOptions },
  ];

  return (
    <ContainerWrapper size="md" pt={4}>
      <Button onClick={onOpen}>Filter</Button>
      <Drawer onClose={onClose} isOpen={isDrawerOpen} placement="left">
        <DrawerOverlay />
        <DrawerContent borderRadius="0 .75rem .75rem 0" p={4}>
          <VStack>
            <HStack justify="left" w="240px">
              <Box flexShrink="0">
                <DatePicker
                  selected={startDate}
                  onChange={(date: Date) => {
                    let queryDateString = format(date, "yyyy-MM-dd"); // what is this then
                    let dateString = format(date, "MM-dd-yyyy");
                    changeQuery(queryDateString, "date");
                    setCurrDate(dateString);
                    setStartDate(date);
                  }}
                  customInput={<CalendarButton />}
                />
              </Box>
              <Text fontWeight={"bold"}>{currDate}</Text>
            </HStack>
            {selectData.map(({ placeholder, id, func }) => (
              <Select
                placeholder={placeholder}
                onChange={(e) => {
                  changeQuery(e, id);
                }}
                w={240}
              >
                {func.map(({ value, text }) => (
                  <option key={`${text}-${value}`} value={value}>
                    {text}
                  </option>
                ))}
              </Select>
            ))}
          </VStack>
        </DrawerContent>
      </Drawer>
    </ContainerWrapper>
  );
};

export default FilterContainer;
