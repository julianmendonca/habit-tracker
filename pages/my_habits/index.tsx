import { Flex, Grid, GridItem, Heading } from '@chakra-ui/layout'
import React, { useState } from 'react'
import CenteredBox from '../../components/cards/CenteredBox'
import 'react-datepicker/dist/react-datepicker.css'
import { IconButton } from '@chakra-ui/button'
import { AddIcon } from '@chakra-ui/icons'
import { Input, Spinner } from '@chakra-ui/react'
import DateSelector from '../../components/DateSelector'
import HabitsList from '../../components/lists/HabitsList'
import { Text } from '@chakra-ui/react'
import { Habit_Type_Enum } from '../../src/graphql/autogenerate/schemas'
import { useAuthContext } from '../../src/context/authContext'
import { useHabits } from '../../src/hooks/useHabits'
import { HabitTypeSelect } from '../../components/selects/HabitTypeSelect'

const MyHabits = () => {
	const { user } = useAuthContext()
	const [date, setDate] = useState(new Date())
	const [newHabitName, setNewHabitName] = useState('')
	const [newHabitType, setNewHabitType] = useState(Habit_Type_Enum.Neutral)
	const { insertHabit, deleteHabit, updateHabit, habitsLoading, habits } = useHabits({ user, date })

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
				{!!habits?.length && <HabitsList habits={habits} onDelete={deleteHabit} onSave={updateHabit} />}
				{!habits?.length && !habitsLoading && <Text>No habits found...</Text>}
				<Grid width="100%" column={12} gap={4} mt={4} mb={4}>
					<GridItem colSpan={12}>
						<Input
							placeholder="Add a habit..."
							value={newHabitName}
							onChange={(e) => setNewHabitName(e.target.value)}
							size="lg"
							onKeyPress={(e) => {
								if (e.key === 'Enter') {
									if (newHabitName) addIconHandler()
								}
							}}
						/>
					</GridItem>
					<GridItem colSpan={11}>
						<HabitTypeSelect
							value={newHabitType}
							onChange={(e) => setNewHabitType(e.target.value as Habit_Type_Enum)}
							size="lg"
							mr={2}
						/>
					</GridItem>
					<GridItem colSpan={1}>
						<IconButton
							size="lg"
							aria-label="Search database"
							onClick={addIconHandler}
							icon={<AddIcon />}
							disabled={!newHabitName}
							width="100%"
						/>
					</GridItem>
				</Grid>
			</Flex>
		</CenteredBox>
	)
}

export default MyHabits
