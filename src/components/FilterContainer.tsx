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
import useScrollPosition from "./utils/hooks/useScrollPosition";

type FilterContainerProps = {
  changeQuery: (e: ChangeEvent<HTMLSelectElement> | string, id: string) => void;
  query: {
    date: string;
    state: string;
    gender_id: string;
    status_id: string;
    sport_id: string;
  };
};

const FilterContainer = ({ changeQuery, query }: FilterContainerProps) => {
  type ObjectKey = keyof typeof query;
  const today = new Date();
  const [startDate, setStartDate] = useState(today);
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

  const resetQuery = () => {
    const ids = ["state", "sport_id", "gender_id", "status_id", "date"];
    ids.forEach((id) => {
      if (id === "date") {
        changeQuery(format(today, "yyyy-MM-dd"), id);
      } else {
        changeQuery("", id);
      }
    });

    setStartDate(today);
    setCurrDate(format(today, "MM-dd-yyyy"));
    onClose();
  };

  const scrollPosition = useScrollPosition();

  return (
    <ContainerWrapper
      size="max"
      py={4}
      bg="white"
      boxShadow={scrollPosition === 0 ? "0" : "lg"}
      style={{ position: "sticky", top: 0 }}
    >
      <ContainerWrapper size="md">
        <Button onClick={onOpen}>Filter</Button>
      </ContainerWrapper>
      <Drawer onClose={onClose} isOpen={isDrawerOpen} placement="left">
        <DrawerOverlay />
        <DrawerContent borderRadius="0 .75rem .75rem 0" p={4}>
          <VStack>
            <HStack justify="left" w="100%">
              <Box flexShrink="0">
                <DatePicker
                  selected={startDate}
                  onChange={(date: Date) => {
                    let queryDateString = format(date, "yyyy-MM-dd");
                    let dateString = format(date, "MM-dd-yyyy");
                    changeQuery(queryDateString, "date");
                    setCurrDate(dateString);
                    setStartDate(date);
                    onClose();
                  }}
                  customInput={<CalendarButton />}
                />
              </Box>
              <Text fontWeight={"bold"}>{currDate}</Text>
            </HStack>
            {selectData.map(({ placeholder, id, func }) => (
              <Select
                key={placeholder}
                placeholder={placeholder}
                defaultValue={query[id as ObjectKey]}
                onChange={(e) => {
                  changeQuery(e, id);
                  onClose();
                }}
              >
                {func.map(({ value, text }) => (
                  <option key={`${text}-${value}`} value={value}>
                    {text}
                  </option>
                ))}
              </Select>
            ))}
            <Button onClick={resetQuery}>Reset</Button>
          </VStack>
        </DrawerContent>
      </Drawer>
    </ContainerWrapper>
  );
};

export default FilterContainer;
