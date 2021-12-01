import React from 'react'
import { Habit, Habit_Type_Enum } from '../../src/graphql/autogenerate/schemas'
import { useState } from 'react'
import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogOverlay,
	AlertDialogProps,
	Button,
	Input,
	Text
} from '@chakra-ui/react'
import { HabitTypeSelect } from '../selects/HabitTypeSelect'
import { DeleteIcon } from '@chakra-ui/icons'

type EditHabitDialogProps = AlertDialogProps & {
	habit: Habit
	onSave: ({}: { habitId: number; habitName: string; habitType: Habit_Type_Enum }) => void
	onDelete: (habitId: number) => void
}
export const EditHabitDialog = ({ habit, onSave, onDelete, ...props }: EditHabitDialogProps) => {
	const [habitName, setHabitName] = useState(habit.name)
	const [habitType, setHabitType] = useState(habit.habit_type || Habit_Type_Enum.Neutral)
	const saveHabit = () => onSave({ habitId: habit.habit_id, habitName, habitType })

	return (
		<AlertDialog {...props}>
			<AlertDialogOverlay>
				<AlertDialogContent ml={5} mr={5}>
					<AlertDialogHeader
						fontSize="lg"
						fontWeight="bold"
						display="flex"
						alignItems="center"
						justifyContent="space-between">
						<Text>Edit Habit</Text>
						<DeleteIcon cursor="pointer" color="red.300" onClick={() => onDelete(habit.habit_id)} />
					</AlertDialogHeader>
					<AlertDialogBody>
						<Input
							placeholder="Basic usage"
							value={habitName}
							onChange={(e) => setHabitName(e.target.value)}
							size="lg"
							onKeyPress={(e) => {
								if (e.key === 'Enter') {
									saveHabit()
								}
							}}
						/>
						<HabitTypeSelect
							value={habitType}
							onChange={(e) => setHabitType(e.target.value as Habit_Type_Enum)}
							size="lg"
							mt={2}
						/>
					</AlertDialogBody>
					<AlertDialogFooter>
						<Button onClick={props.onClose}>Cancel</Button>
						<Button colorScheme="green" ml={3} disabled={habit?.habit_id < 0} onClick={saveHabit}>
							Save
						</Button>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialogOverlay>
		</AlertDialog>
	)
}
