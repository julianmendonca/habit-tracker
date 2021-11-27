import { Flex, Heading } from '@chakra-ui/layout'
import React, { useState } from 'react'
import CenteredBox from '../../components/cards/CenteredBox'
import 'react-datepicker/dist/react-datepicker.css'
import { IconButton } from '@chakra-ui/button'
import { AddIcon } from '@chakra-ui/icons'
import { Input, Spinner } from '@chakra-ui/react'
import DateSelector from '../../components/DateSelector'
import HabitsList from '../../components/lists/HabitsList'
import {
	useGetHabitsByUserIdAndDateQuery,
	useGetUsersQuery,
	useInsertHabitMutation
} from '../../src/graphql/autogenerate/hooks'
import { Habit, Habit_Type_Enum } from '../../src/graphql/autogenerate/schemas'
import { useAuthContext } from '../../src/context/authContext'

const History = () => {
	const { user } = useAuthContext()
	const [date, setDate] = useState(new Date())
	const [habits, setHabits] = useState<Habit[]>([])
	const [newHabit, setNewHabit] = useState('')

	const [insertHabitMutation, { data: insertHabitData, loading: insertDataLoading }] = useInsertHabitMutation()
	const { data: habitsData, loading: habitsLoading } = useGetHabitsByUserIdAndDateQuery({
		variables: {
			userId: user?.id || 0,
			date: date.toISOString()
		}
	})
	const addIcon = () => {
		setNewHabit('')
		if (user?.id) {
			insertHabitMutation({
				variables: {
					name: newHabit.toLowerCase(),
					userId: user.id,
					habitType: Habit_Type_Enum.Neutral
				},
				update: (cache, { data }) => {
					cache.evict({ id: `habit:${data?.insert_habit_one?.habit_id}` })
				}
			})
		}
	}

	const { data } = useGetUsersQuery()

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
				{habitsData?.habit?.length && <HabitsList habits={habitsData.habit} />}
				<Flex alignItems="center" justifyContent="space-between" width="100%" mt={8} mb={8}>
					<Input
						placeholder="Basic usage"
						mr={2}
						value={newHabit}
						onChange={(e) => setNewHabit(e.target.value)}
						size="lg"
					/>
					<IconButton size="lg" aria-label="Search database" onClick={addIcon} icon={<AddIcon />} />
				</Flex>
			</Flex>
		</CenteredBox>
	)
}

export default History
