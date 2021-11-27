import { useEffect, useState } from 'react'
import {
	useDeleteHabitByPkMutation,
	useGetHabitsByUserIdAndDateQuery,
	useInsertHabitMutation
} from '../src/graphql/autogenerate/hooks'
import { Habit, Habit_Type_Enum, Users } from '../src/graphql/autogenerate/schemas'
import { currentDate, getCurrentTimez } from '../src/utils/timeFormat'

type UseHabitsProps = {
	user: Users | null
	date: Date
}
let habitIdMock = 0

export const useHabits = ({ user, date }: UseHabitsProps) => {
	const [habits, setHabits] = useState<Habit[]>([])

	const [insertHabitMutation] = useInsertHabitMutation()
	const {
		data: habitsData,
		loading: habitsLoading,
		refetch
	} = useGetHabitsByUserIdAndDateQuery({
		variables: {
			userId: user?.id || 0,
			date: date.toISOString(),
			offset: 0
		},
		fetchPolicy: 'no-cache'
	})
	const [deleteHabitMutation] = useDeleteHabitByPkMutation()
	const insertHabit = (newHabit: string, habitType: Habit_Type_Enum = Habit_Type_Enum.Neutral) => {
		if (user?.id) {
			const mockHabit: Habit = {
				name: newHabit.toLowerCase(),
				user_id: user.id,
				habit_type: habitType,
				habit_id: habitIdMock--,
				created_at: currentDate(),
				time_created: getCurrentTimez()
			}
			setHabits((prev) => [...prev, mockHabit])
			insertHabitMutation({
				variables: {
					name: newHabit.toLowerCase(),
					userId: user.id,
					habitType: habitType,
					time: getCurrentTimez()
				},
				update: async () => {
					if (refetch) refetch()
				}
			})
		}
	}
	const deleteHabit = (habitId: number) => {
		setHabits((prev) => prev.filter((i) => i.habit_id !== habitId))
		deleteHabitMutation({
			variables: {
				habitId
			}
		})
	}

	useEffect(() => {
		setHabits(habitsData?.habit || [])
	}, [habitsData])

	return {
		insertHabit,
		deleteHabit,
		habitsLoading,
		habits
	}
}
