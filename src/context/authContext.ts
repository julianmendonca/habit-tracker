import { useState } from 'react'
import { Users } from '../graphql/autogenerate/schemas'
import { buildGenericContext } from '../utils/genericContext'

const useAuth = () => {
	const [user, setUser] = useState<Users | null>(null)

	return { user, setUser }
}

export const [AuthProvider, useAuthContext] = buildGenericContext(useAuth)
