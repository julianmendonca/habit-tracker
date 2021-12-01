import HabitCard from '../cards/HabitCard'
import { Flex, FlexProps } from '@chakra-ui/react'
import { Habit, Habit_Type_Enum } from '../../src/graphql/autogenerate/schemas'
type HabitsListProps = FlexProps & {
	habits: Habit[]
	onDelete: (habitId: number) => void
	onSave: (habitId: number, habitName: string, habitType: Habit_Type_Enum) => void
}
const HabitsList = ({ habits, onDelete, onSave, ...props }: HabitsListProps) => {
	return (
		<Flex direction="column" alignItems="center" width="100%" {...props}>
			{habits.map((i) => {
				return <HabitCard key={i.habit_id} habit={i} onDelete={onDelete} onSave={onSave} />
			})}
		</Flex>
	)
}

export default HabitsList
