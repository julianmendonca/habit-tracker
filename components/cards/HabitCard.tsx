import { Box, Flex, HStack, Text } from '@chakra-ui/layout'
import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogOverlay,
	Button,
	Tooltip
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { Habit, Habit_Type_Enum } from '../../src/graphql/autogenerate/schemas'
import { getTimeFromTimestamp } from '../../src/utils/timeFormat'
import EmptyCard from './EmptyCard'
import { CheckCircleIcon, ViewIcon, WarningIcon } from '@chakra-ui/icons'

type HabitCardProps = {
	habit: Habit
	onDelete: (habitId: number) => void
}

const HabitCard = ({ habit, onDelete }: HabitCardProps) => {
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
	const openDeleteDialog = () => setDeleteDialogOpen(true)
	const closeDeleteDialog = () => setDeleteDialogOpen(false)
	const cancelRef = React.useRef(null)
	const handleDelete = () => {
		onDelete(habit.habit_id)
		closeDeleteDialog()
	}

	const TypeIcon = () => {
		const habitType = habit.habit_type
		if (habitType === Habit_Type_Enum.Good) {
			return (
				<Tooltip label="Good Habit">
					<CheckCircleIcon color="green.300" />
				</Tooltip>
			)
		} else if (habitType === Habit_Type_Enum.Bad) {
			return (
				<Tooltip label="Bad Habit">
					<WarningIcon color="red.300" />
				</Tooltip>
			)
		} else {
			return (
				<Tooltip label="Neutral Habit">
					<ViewIcon color="blue.200" />
				</Tooltip>
			)
		}
	}

	return (
		<EmptyCard width="100%" p={3} mt={3} mb={3} borderRadius={4} onClick={openDeleteDialog}>
			<Flex alignItems="center" justifyContent="space-between">
				<Text textTransform="capitalize">{habit.name}</Text>
				<HStack>
					<Text mr={5} textTransform="uppercase">
						{getTimeFromTimestamp(habit.time_created || '')}
					</Text>
					<TypeIcon />
				</HStack>
			</Flex>
			<AlertDialog isOpen={deleteDialogOpen} leastDestructiveRef={cancelRef} onClose={closeDeleteDialog}>
				<AlertDialogOverlay>
					<AlertDialogContent ml={5} mr={5}>
						<AlertDialogHeader fontSize="lg" fontWeight="bold">
							Delete Habit
						</AlertDialogHeader>

						<AlertDialogBody>Are you sure you want to delete this habit?</AlertDialogBody>

						<AlertDialogFooter>
							<Button onClick={closeDeleteDialog}>Cancel</Button>
							<Button colorScheme="red" onClick={handleDelete} ml={3} disabled={habit.habit_id < 0}>
								Delete
							</Button>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialogOverlay>
			</AlertDialog>
		</EmptyCard>
	)
}

export default HabitCard
