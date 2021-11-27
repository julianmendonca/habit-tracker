import { Button, ButtonProps } from '@chakra-ui/button'
import { useColorMode } from '@chakra-ui/color-mode'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import React from 'react'
import { usePurple } from '../../src/utils/colors'

const ColorModeButton = (props: ButtonProps) => {
	const { colorMode, toggleColorMode } = useColorMode()
	const bgColor = usePurple()

	return (
		<Button
			onClick={toggleColorMode}
			_hover={{
				backgroundColor: bgColor,
				color: 'white'
			}}
			{...props}>
			{colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
		</Button>
	)
}

export default ColorModeButton
