import { useSession, signIn } from 'next-auth/react'

import { GoogleButton } from '..'

export const LoginHeader = () => {
	const { status } = useSession()

	const handleGoogleLogin = () => {
		return signIn('google')
	}

	if (status === 'authenticated') {
		return <>Olá</>
	}

	if (status === 'unauthenticated') {
		return (
			<div className="flex">
				<p className="pr-4 hidden md:block">Faça o seu acesso</p>
				<GoogleButton onClick={handleGoogleLogin} />
			</div>
		)
	}

	if (status === 'loading') {
		return <>Loading</>
	}
}
