import { Flex, Text } from '@chakra-ui/layout'
import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogOverlay,
	Button
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { Habit } from '../../src/graphql/autogenerate/schemas'
import EmptyCard from './EmptyCard'

type HabitCardProps = {
	habit: Habit
}

const HabitCard = ({ habit }: HabitCardProps) => {
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
	const openDeleteDialog = () => setDeleteDialogOpen(true)
	const closeDeleteDialog = () => setDeleteDialogOpen(false)
	const cancelRef = React.useRef(null)
	const handleDelete = () => {
		alert('Deleted ' + habit.habit_id)
		closeDeleteDialog()
	}

	return (
		<EmptyCard width="100%" p={3} mt={3} mb={3} borderRadius={4} onClick={openDeleteDialog}>
			<Flex alignItems="center" justifyContent="space-between">
				<Text>{habit.name}</Text>
				<Text>
					{habit.time_created.toLocaleString('en-US', {
						hour: 'numeric',
						minute: 'numeric',
						hour12: true
					})}
				</Text>
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
							<Button colorScheme="red" onClick={handleDelete} ml={3}>
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
