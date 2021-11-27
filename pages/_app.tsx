import { ChakraProvider, Flex, Heading, useColorMode } from '@chakra-ui/react'
import { AppProps } from 'next/dist/shared/lib/router/router'
import { Box } from '@chakra-ui/layout'
import theme from '../theme'
import React from 'react'
import ColorModeButton from '../components/buttons/ColorModeButton'
import client from '../apollo-client'
import { ApolloProvider } from '@apollo/client'
import { AuthProvider, useAuthContext } from '../src/context/authContext'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const MyAppContent = ({ Component, pageProps }: AppProps) => {
	const { user } = useAuthContext()
	const router = useRouter()
	const { colorMode } = useColorMode()
	const backgroundColor = colorMode === 'light' ? 'gray.300' : 'gray.800'

	useEffect(() => {
		if (!user?.id && router.pathname !== '/') {
			router.push('/')
		}
	}, [user?.id])

	return (
		<Box>
			<Box
				position="fixed"
				width="100%"
				height="100%"
				backgroundColor={backgroundColor}
				left={0}
				top={0}
				zIndex="-10"></Box>
			<Box
				width="100%"
				backgroundColor={backgroundColor}
				position="fixed"
				top={0}
				left={0}
				pb={5}
				pt={5}
				zIndex={2}>
				<Flex
					width="90%"
					alignItems="center"
					justifyContent="space-between"
					maxWidth={500}
					margin="0 auto">
					<Heading mr="10" alignItems="center">
						Habits Tracker
					</Heading>
					<ColorModeButton />
				</Flex>
			</Box>
			<Box height="150px"></Box>
			<Component {...pageProps} />
		</Box>
	)
}

function MyApp(props: AppProps) {
	return (
		<ApolloProvider client={client}>
			<ChakraProvider theme={theme}>
				<AuthProvider>
					<MyAppContent {...props} />
				</AuthProvider>
			</ChakraProvider>
		</ApolloProvider>
	)
}
export default MyApp
