import { Habit } from "../../pages/history";
import HabitCard from "../cards/HabitCard";
import { Flex, FlexProps } from "@chakra-ui/react";
type HabitsListProps = FlexProps & {
  habits: Habit[];
};
const HabitsList = ({ habits, ...props }: HabitsListProps) => {
  return (
    <Flex direction="column" alignItems="center" width="100%" {...props}>
      {habits.map((i) => {
        console.log(i);
        return <HabitCard key={i.id} habit={i} />;
      })}
    </Flex>
  );
};

export default HabitsList;
