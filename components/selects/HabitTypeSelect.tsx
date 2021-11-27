import { CheckCircleIcon, ViewIcon, WarningIcon } from '@chakra-ui/icons'
import { Select, SelectProps } from '@chakra-ui/react'
import React from 'react'
import { Habit_Type_Enum } from '../../src/graphql/autogenerate/schemas'

export const HabitTypeSelect = (props: SelectProps) => {
	return (
		<Select {...props}>
			<option value={Habit_Type_Enum.Neutral}>Neutral</option>
			<option value={Habit_Type_Enum.Good}>Good</option>
			<option value={Habit_Type_Enum.Bad}>Bad</option>
		</Select>
	)
}
