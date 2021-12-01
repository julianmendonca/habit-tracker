import { Flex } from '@chakra-ui/layout'
import { Spinner } from '@chakra-ui/spinner'
import type { NextPage } from 'next'
import React from 'react'
import GoogleLogin, { GoogleLoginResponse } from 'react-google-login'
import CenteredBox from '../components/cards/CenteredBox'
import { useLogin } from '../src/hooks/useLogin'

const Home: NextPage = () => {
	const { setGoogleResponse, loginLoading, signupLoading } = useLogin()

	const handleSuccesLogin = (response: GoogleLoginResponse) => {
		if (response?.googleId) {
			setGoogleResponse(response)
		}
	}

	return (
		<CenteredBox>
			<Flex alignItems="center" justifyContent="space-around" mt="20">
				{!loginLoading && !signupLoading ? (
					<GoogleLogin
						clientId="685479742912-vbmi76gjr0mdj8dicv1spm4fh56g8upl.apps.googleusercontent.com"
						buttonText="Login"
						onSuccess={(response) => handleSuccesLogin(response as GoogleLoginResponse)}
						onFailure={() => alert('error')}
						cookiePolicy={'single_host_origin'}
						style={{ borderRadius: 35 }}
						isSignedIn
					/>
				) : (
					<Spinner size="xl" />
				)}
			</Flex>
		</CenteredBox>
	)
}

export default Home
