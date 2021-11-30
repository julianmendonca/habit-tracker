import React from 'react'
import { DesktopNav } from './DesktopNav'
import { useMediaQuery } from '@chakra-ui/react'
import { MobileNav } from './MobileNav'

export const NavBar = () => {
	const [isDesktop] = useMediaQuery('(min-width: 600px)')

	return isDesktop ? <DesktopNav /> : <MobileNav />
}
