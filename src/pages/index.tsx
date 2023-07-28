import { useSession } from 'next-auth/react'

export default function Home() {
	const { status, data } = useSession()

	return <div>{JSON.stringify({ status, data })}</div>
}
