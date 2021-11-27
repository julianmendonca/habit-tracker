import { Button } from '@chakra-ui/button'
import { Flex, Heading, HStack, Link } from '@chakra-ui/layout'
import React from 'react'
import ColorModeButton from '../buttons/ColorModeButton'

export const NavBar = () => {
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
			</HStack>
		</Flex>
	)
}
