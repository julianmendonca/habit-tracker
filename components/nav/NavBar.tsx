import React from 'react'
import { DesktopNav } from './DesktopNav'
import { useBreakpointValue, useMediaQuery } from '@chakra-ui/react'
import { MobileNav } from './MobileNav'

export const NavBar = () => {
	const isMinWidthLg = useBreakpointValue({ lg: true })

	return isMinWidthLg ? <DesktopNav /> : <MobileNav />
}
