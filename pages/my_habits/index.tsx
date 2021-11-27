import { Flex, Heading } from '@chakra-ui/layout'
import React, { useState } from 'react'
import CenteredBox from '../../components/cards/CenteredBox'
import 'react-datepicker/dist/react-datepicker.css'
import { IconButton } from '@chakra-ui/button'
import { AddIcon } from '@chakra-ui/icons'
import { Input, Spinner } from '@chakra-ui/react'
import DateSelector from '../../components/DateSelector'
import HabitsList from '../../components/lists/HabitsList'
import { Text } from '@chakra-ui/react'
import {
	useDeleteHabitByPkMutation,
	useGetHabitsByUserIdAndDateQuery,
	useInsertHabitMutation
} from '../../src/graphql/autogenerate/hooks'
import { Habit, Habit_Type_Enum } from '../../src/graphql/autogenerate/schemas'
import { useAuthContext } from '../../src/context/authContext'
import { useEffect } from 'react'
import { currentDate, getCurrentTime, getCurrentTimez } from '../../src/utils/timeFormat'
import { useHabits } from '../../hooks/useHabits'
import { HabitTypeSelect } from '../../components/selects/HabitTypeSelect'

const MyHabits = () => {
	const { user } = useAuthContext()
	const [date, setDate] = useState(new Date())
	const [newHabitName, setNewHabitName] = useState('')
	const [newHabitType, setNewHabitType] = useState(Habit_Type_Enum.Neutral)

	const { insertHabit, deleteHabit, habitsLoading, habits } = useHabits({ user, date })

	const addIconHandler = () => {
		setNewHabitName('')
		insertHabit(newHabitName, newHabitType)
	}

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
				mr="auto">
				<DateSelector date={date} setDate={setDate} />
			</Flex>
			<Flex direction="column" alignItems="center">
				{habitsLoading && <Spinner size="xl" />}
				{!!habits?.length && <HabitsList habits={habits} onDelete={deleteHabit} />}
				{!habits?.length && !habitsLoading && <Text>No habits found...</Text>}
				<Flex alignItems="center" justifyContent="space-between" width="100%" mt={8} mb={8}>
					<Input
						placeholder="Basic usage"
						value={newHabitName}
						onChange={(e) => setNewHabitName(e.target.value)}
						size="lg"
					/>
					<HabitTypeSelect
						value={newHabitType}
						onChange={(e) => setNewHabitType(e.target.value as Habit_Type_Enum)}
						size="lg"
						width="40%"
						mr={2}
						ml={2}
					/>
					<IconButton
						size="lg"
						aria-label="Search database"
						onClick={addIconHandler}
						icon={<AddIcon />}
						disabled={!newHabitName}
					/>
				</Flex>
			</Flex>
		</CenteredBox>
	)
}

export default MyHabits
