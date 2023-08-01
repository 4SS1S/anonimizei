import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import { useStore } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ApolloProvider } from '@apollo/client'

import { wrapper } from '@/context/store'
import client from '@/lib/apollo-client'
import '@/styles/globals.css'
import { Navbar } from '@/components'

const App: React.FC<AppProps> = ({
	Component,
	pageProps: { session, ...pageProps }
}) => {
	const store: any = useStore()

	return (
		<PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
			<ApolloProvider client={client}>
				<SessionProvider session={session}>
					<Navbar />
					<Component {...pageProps} />
				</SessionProvider>
			</ApolloProvider>
		</PersistGate>
	)
}

export default wrapper.withRedux(App)
