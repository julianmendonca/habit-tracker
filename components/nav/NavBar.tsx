import { Button } from '@chakra-ui/button'
import { Flex, Heading, HStack, Link } from '@chakra-ui/layout'
import React from 'react'
import { GoogleLogout } from 'react-google-login'
import ColorModeButton from '../buttons/ColorModeButton'
import { useRouter } from 'next/router'

export const NavBar = () => {
	const router = useRouter()
	const handleSuccesLogout = () => {
		router.push('/')
	}

	return (
		<Flex width="90%" alignItems="center" justifyContent="space-between" maxWidth={900} margin="0 auto">
			<Heading fontSize={[20, 40]} mr="10" alignItems="center">
				Habits Tracker
			</Heading>
			<HStack>
				<Button>
					<Link href="/my_habits">My Habits</Link>
				</Button>
				<Button>
					<Link href="/analytics">Analytics</Link>
				</Button>
				<ColorModeButton />
				<GoogleLogout
					clientId="685479742912-vbmi76gjr0mdj8dicv1spm4fh56g8upl.apps.googleusercontent.com"
					buttonText="Logout"
					onLogoutSuccess={handleSuccesLogout}></GoogleLogout>
			</HStack>
		</Flex>
	)
}
