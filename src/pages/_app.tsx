import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import { useStore } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { wrapper } from '@/context/store'

const App: React.FC<AppProps> = ({
	Component,
	pageProps: { session, ...pageProps }
}) => {
	const store: any = useStore()

	return (
		<PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
			<SessionProvider session={session}>
				<Component {...pageProps} />
			</SessionProvider>
		</PersistGate>
	)
}

export default wrapper.withRedux(App)
