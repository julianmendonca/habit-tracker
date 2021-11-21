import { Button } from "@chakra-ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/layout";
import DatePicker from "react-datepicker";
type DateSelectorProps = {
  date: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
};
const DateSelector = ({ date, setDate }: DateSelectorProps) => {
  const goBackOneDay = () => {
    const prevDay = new Date(date);
    prevDay.setDate(prevDay.getDate() - 1);
    setDate(prevDay);
  };

  const goForwardOneDay = () => {
    const nextDay = new Date(date);
    nextDay.setDate(nextDay.getDate() + 1);
    setDate(nextDay);
  };

  const handleDateChange = (
    dateEv: Date | [Date | null, Date | null] | null
  ) => {
    if (dateEv && !Array.isArray(dateEv)) setDate(dateEv);
  };

  return (
    <>
      <Button onClick={goBackOneDay}>
        <ChevronLeftIcon />
      </Button>
      <Box>
        <DatePicker
          selected={date}
          onChange={handleDateChange}
          customInput={
            <Button width="100%" minWidth={200}>
              {date.toDateString()}
            </Button>
          }
        />
      </Box>
      <Button onClick={goForwardOneDay}>
        <ChevronRightIcon />
      </Button>
    </>
  );
};

export default DateSelector;
