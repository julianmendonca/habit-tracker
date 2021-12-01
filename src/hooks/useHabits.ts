import { useEffect, useState } from 'react'
import client from '../../apollo-client'
import {
	GetHabitsByUserIdAndDateDocument,
	useDeleteHabitByPkMutation,
	useGetHabitsByUserIdAndDateQuery,
	useInsertHabitMutation,
	useUpdateHabitByPkMutation
} from '../graphql/autogenerate/hooks'
import { Habit, Habit_Type_Enum, Users } from '../graphql/autogenerate/schemas'
import { currentDate, getCurrentTimez } from '../utils/timeFormat'

type UseHabitsProps = {
	user: Users | null
	date: Date
}
let habitIdMock = -1

export const useHabits = ({ user, date }: UseHabitsProps) => {
	const [habits, setHabits] = useState<Habit[]>([])

	const [insertHabitMutation] = useInsertHabitMutation()
	const [deleteHabitMutation] = useDeleteHabitByPkMutation()
	const [updateHabitMutation] = useUpdateHabitByPkMutation()

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
			let habitName = newHabit.toLowerCase()
			let newHabitType = habitType
			if (newHabit.includes('-b')) {
				habitName = newHabit.replace('-b', '').trim()
				newHabitType = Habit_Type_Enum.Bad
			} else if (newHabit.includes('-g')) {
				habitName = newHabit.replace('-g', '').trim()
				newHabitType = Habit_Type_Enum.Good
			} else if (newHabit.includes('-n')) {
				habitName = newHabit.replace('-n', '').trim()
				newHabitType = Habit_Type_Enum.Neutral
			}
			insertHabitMutation({
				variables: {
					name: habitName.toLowerCase(),
					userId: user.id,
					habitType: newHabitType,
					time: getCurrentTimez(),
					date: insertDate
				},
				optimisticResponse: {
					insert_habit_one: {
						name: habitName.toLowerCase(),
						user_id: user.id,
						habit_type: newHabitType,
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

	const updateHabit = (habitId: number, habitName: string, habitType: Habit_Type_Enum) => {
		updateHabitMutation({
			variables: {
				habitId,
				habitType,
				habitName
			},
			optimisticResponse: {
				update_habit_by_pk: {
					habit_id: habitId,
					name: habitName,
					habit_type: habitType
				}
			},
			update: async (cache, { data }) => {
				const existingHabits = client.readQuery({
					query: GetHabitsByUserIdAndDateDocument,
					variables: getHabitsVariables
				})
				const newHabits = existingHabits.habit.map((i: Habit) => {
					if (i.habit_id === habitId) {
						return {
							...i,
							name: habitName,
							habit_type: habitType
						}
					}
					return i
				})
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
		habits,
		updateHabit
	}
}
