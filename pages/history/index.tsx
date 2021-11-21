import { Box, Flex, Heading } from "@chakra-ui/layout";
import React, { useState } from "react";
import CenteredBox from "../../components/cards/CenteredBox";
import "react-datepicker/dist/react-datepicker.css";
import { Button, IconButton } from "@chakra-ui/button";
import { AddIcon } from "@chakra-ui/icons";
import { Input } from "@chakra-ui/react";
import DateSelector from "../../components/DateSelector";
import HabitsList from "../../components/lists/HabitsList";

export type Habit = {
  id: number;
  name: string;
  time: Date;
};

const History = () => {
  const [date, setDate] = useState(new Date());
  const [habits, setHabits] = useState<Habit[]>([
    { id: 0, name: "Pizza", time: new Date() },
    { id: 1, name: "Coffee", time: new Date() },
    { id: 2, name: "Coding", time: new Date() },
    { id: 3, name: "Reading", time: new Date() },
    { id: 4, name: "Sleeping", time: new Date() },
    { id: 5, name: "Eating", time: new Date() },
    { id: 6, name: "Coding", time: new Date() },
    { id: 7, name: "Reading", time: new Date() },
    { id: 8, name: "Sleeping", time: new Date() },
    { id: 9, name: "Eating", time: new Date() },
    { id: 10, name: "Coding", time: new Date() },
  ]);
  const [newHabit, setNewHabit] = useState("");

  const addIcon = () => {
    setHabits((prev) => [
      ...prev,
      { id: prev[prev.length - 1].id + 1, name: newHabit, time: new Date() },
    ]);
    setNewHabit("");
  };

  return (
    <CenteredBox>
      <Heading textAlign="center">Your habits!</Heading>
      <Flex
        width={80}
        alignItems="center"
        justifyContent="space-between"
        mt={10}
        mb={10}
        ml="auto"
        mr="auto"
      >
        <DateSelector date={date} setDate={setDate} />
      </Flex>
      <Flex direction="column" alignItems="center">
        <HabitsList habits={habits} />
        <Flex
          alignItems="center"
          justifyContent="space-between"
          width="100%"
          mt={8}
          mb={8}
        >
          <Input
            placeholder="Basic usage"
            mr={2}
            value={newHabit}
            onChange={(e) => setNewHabit(e.target.value)}
            size="lg"
          />
          <IconButton
            size="lg"
            aria-label="Search database"
            onClick={addIcon}
            icon={<AddIcon />}
          />
        </Flex>
      </Flex>
    </CenteredBox>
  );
};

export default History;
