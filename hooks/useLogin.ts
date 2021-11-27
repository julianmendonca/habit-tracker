import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { GoogleLoginResponse } from 'react-google-login'
import { useAuthContext } from '../src/context/authContext'
import { useGetUserByGoogleIdLazyQuery, useInsertUserMutation } from '../src/graphql/autogenerate/hooks'
import { Users } from '../src/graphql/autogenerate/schemas'

export const useLogin = () => {
	const router = useRouter()
	const [googleResponse, setGoogleResponse] = useState<GoogleLoginResponse | null>(null)
	const { setUser } = useAuthContext()

	const [loginQuery, { data: loginData, loading: loginLoading, error: loginError }] =
		useGetUserByGoogleIdLazyQuery()
	const [signupMutation, { data: signupData, loading: signupLoading, error: signupError }] =
		useInsertUserMutation()

	const goToHistory = () => router.push('/my_habits')

	useEffect(() => {
		if (!googleResponse) return
		loginQuery({ variables: { googleId: googleResponse.googleId } })
	}, [googleResponse])

	useEffect(() => {
		if (loginData?.users.length) {
			setUser(loginData.users[0] as Users)
			goToHistory()
		} else if (googleResponse) {
			const {
				profileObj: { email, name, imageUrl, googleId }
			} = googleResponse
			signupMutation({
				variables: {
					email,
					name,
					imageUrl,
					googleId
				},
				update: (_cache, { data }) => {
					if (data?.insert_users?.returning.length) {
						setUser(data?.insert_users?.returning[0] as Users)
						goToHistory()
					}
				}
			})
		}
	}, [loginData])

	return { setGoogleResponse, loginLoading, signupLoading }
}
