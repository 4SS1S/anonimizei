import { useSession, signIn } from 'next-auth/react'

import { GoogleButton } from '@/components'

export default function Home() {
	const { status, data } = useSession()

	const handleGoogleLogin = () => {
		return signIn('google')
	}

	if (status === 'unauthenticated') {
		return (
			<>
				<div>
					Já tem uma conta? faça o login
					<GoogleButton onClick={handleGoogleLogin} />
				</div>
			</>
		)
	}

	return <>Reloading the application to right page</>
}
