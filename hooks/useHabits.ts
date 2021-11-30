import { useEffect, useState } from 'react'
import client from '../apollo-client'
import {
	GetHabitsByUserIdAndDateDocument,
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
let habitIdMock = -1

export const useHabits = ({ user, date }: UseHabitsProps) => {
	const [habits, setHabits] = useState<Habit[]>([])

	const [insertHabitMutation] = useInsertHabitMutation()
	const [deleteHabitMutation] = useDeleteHabitByPkMutation()

	const getHabitsVariables = {
		userId: user?.id || 0,
		date: date.toISOString().split('T')[0]
	}
	const { data: habitsData, loading: habitsLoading } = useGetHabitsByUserIdAndDateQuery({
		variables: getHabitsVariables
	})

	const insertHabit = (newHabit: string, habitType: Habit_Type_Enum = Habit_Type_Enum.Neutral) => {
		if (user?.id) {
			const insertDate = date.toISOString().split('T')[0]
			insertHabitMutation({
				variables: {
					name: newHabit.toLowerCase(),
					userId: user.id,
					habitType: habitType,
					time: getCurrentTimez(),
					date: insertDate
				},
				optimisticResponse: {
					insert_habit_one: {
						name: newHabit.toLowerCase(),
						user_id: user.id,
						habit_type: habitType,
						habit_id: habitIdMock--,
						created_at: insertDate,
						time_created: getCurrentTimez()
					}
				},
				update: async (cache, { data }) => {
					const existingHabits = client.readQuery({
						query: GetHabitsByUserIdAndDateDocument,
						variables: getHabitsVariables
					})
					const newHabits = [...existingHabits.habit, data?.insert_habit_one]
					cache.writeQuery({
						query: GetHabitsByUserIdAndDateDocument,
						variables: getHabitsVariables,
						data: { habit: newHabits }
					})
				}
			})
		}
	}

	const deleteHabit = (habitId: number) => {
		setHabits((prev) => prev.filter((i) => i.habit_id !== habitId))
		deleteHabitMutation({
			variables: {
				habitId
			},
			optimisticResponse: {
				delete_habit_by_pk: {
					habit_id: habitId
				}
			},
			update: async (cache, { data }) => {
				const existingHabits = client.readQuery({
					query: GetHabitsByUserIdAndDateDocument,
					variables: getHabitsVariables
				})
				const newHabits = existingHabits.habit.filter((i: Habit) => i.habit_id !== habitId)
				cache.writeQuery({
					query: GetHabitsByUserIdAndDateDocument,
					variables: getHabitsVariables,
					data: { habit: newHabits }
				})
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
