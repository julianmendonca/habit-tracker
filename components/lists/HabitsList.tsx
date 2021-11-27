import HabitCard from '../cards/HabitCard'
import { Flex, FlexProps } from '@chakra-ui/react'
import { Habit } from '../../src/graphql/autogenerate/schemas'
type HabitsListProps = FlexProps & {
	habits: Habit[]
	onDelete: (habitId: number) => void
}
const HabitsList = ({ habits, onDelete, ...props }: HabitsListProps) => {
	return (
		<Flex direction="column" alignItems="center" width="100%" {...props}>
			{habits.map((i) => {
				return <HabitCard key={i.habit_id} habit={i} onDelete={onDelete} />
			})}
		</Flex>
	)
}

export default HabitsList
