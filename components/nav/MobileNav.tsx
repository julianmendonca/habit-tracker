import { Button } from '@chakra-ui/button'
import { Flex, Heading, HStack } from '@chakra-ui/layout'
import React from 'react'
import { GoogleLogout, useGoogleLogout } from 'react-google-login'
import ColorModeButton from '../buttons/ColorModeButton'
import { useRouter } from 'next/router'
import { IconButton, Menu, MenuButton, MenuItem, MenuList, useColorMode } from '@chakra-ui/react'
import { ChevronDownIcon, CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'

export const MobileNav = () => {
	const router = useRouter()
	const { colorMode, toggleColorMode } = useColorMode()
	const handleSuccesLogout = () => {
		router.push('/')
	}
	const goToAnalytics = () => {
		router.push('/analytics', undefined, { shallow: true })
	}
	const goToHabits = () => {
		router.push('/my_habits', undefined, { shallow: true })
	}

	const { signOut } = useGoogleLogout({
		clientId: '685479742912-vbmi76gjr0mdj8dicv1spm4fh56g8upl.apps.googleusercontent.com',
		onLogoutSuccess: handleSuccesLogout
	})

	return (
		<Flex width="90%" alignItems="center" justifyContent="space-between" maxWidth={900} margin="0 auto">
			<Heading fontSize={[20, 40]} mr="10" alignItems="center">
				Habits Trackerr
			</Heading>
			<Menu>
				<MenuButton as={IconButton} aria-label="Options" icon={<HamburgerIcon />} />
				<MenuList>
					<MenuItem onClick={goToHabits}>My Habits</MenuItem>
					<MenuItem onClick={goToAnalytics}>Analytics</MenuItem>
					<MenuItem
						onClick={toggleColorMode}
						icon={
							colorMode === 'light' ? (
								<SunIcon display="flex" alignItems="center" />
							) : (
								<MoonIcon display="flex" alignItems="center" />
							)
						}
						alignItems="center"
						display="flex">
						Color Mode
					</MenuItem>
					<MenuItem onClick={signOut} icon={<CloseIcon />}>
						Logout
					</MenuItem>
				</MenuList>
			</Menu>
		</Flex>
	)
}
