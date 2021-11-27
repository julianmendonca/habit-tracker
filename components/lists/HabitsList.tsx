import HabitCard from '../cards/HabitCard'
import { Flex, FlexProps } from '@chakra-ui/react'
import { Habit } from '../../src/graphql/autogenerate/schemas'
type HabitsListProps = FlexProps & {
	habits: Habit[]
}
const HabitsList = ({ habits, ...props }: HabitsListProps) => {
	return (
		<Flex direction="column" alignItems="center" width="100%" {...props}>
			{habits.map((i) => {
				return <HabitCard key={i.habit_id} habit={i} />
			})}
		</Flex>
	)
}

export default HabitsList
